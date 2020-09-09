import React, {useState} from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Modal, Button } from '@material-ui/core';
import './Tarea.css'
import db from '../db/firebase.js'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline.js';
import { makeStyles } from '@material-ui/core/styles';
//Poner atributo secondary={props.textarea} -> Para especificar la tarea
const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing[2,4,3],
    },
}))

function Tarea(props) {
    const classes = useStyles();
    const [abierto, setAbierto] = useState(false);
    const [input, setInput] = useState();

    const handleOpen = () => {
        setAbierto(true);
    };

    const updateTodo = () => {
        
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true });

        setAbierto(false);
    }
    return (
        <>
        <Modal
            open={abierto}
            onClose={e => setAbierto(false)}
        >
            <div className={classes.paper}>
                <h1>Open</h1>
                <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                <Button onClick={updateTodo}>Actualizar</Button>
            </div>
        </Modal>
        <List>
            <ListItem>
                <ListItemAvatar />
                <ListItemText primary={props.todo.todo} secondary="Colocar detalle"/>
            </ListItem>
            <button onClick={e => setAbierto(true)}>Editar</button>
            <DeleteOutlineIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
        </List>
        </>
    )
}

export default Tarea;
