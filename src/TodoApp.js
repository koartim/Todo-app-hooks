import React, {useState} from 'react'
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoApp = () => {

    const localTodos = [
        {id: 1, task: "Clean Fish", completed: false},
        {id: 2, task: "Satiate Car", completed: false},
        {id: 3, task: "Find Frogs", completed: false}
    ];

    const [todos, setTodos] = useState(localTodos); 

    const addTodo = (newTodoText) => {
        setTodos([...todos, {id: 4, task: newTodoText, completed: false}]);
    }
    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}
        elevation={0}
        >
            <AppBar color='primary' position='static' style={{height: "64px"}}>
                <ToolBar>
                    <Typography color='inherit'>Todos With Hooks</Typography>
                </ToolBar>
            </AppBar>
            <TodoForm addTodo={addTodo}/>
            <TodoList todos={todos}/>
        </Paper>
    )
}
export default TodoApp;