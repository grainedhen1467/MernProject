import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Public from "./components/Public";
import Login from './features/auth/Login';
import DashLayout from './components/DashLayout';
import Welcome from './features/auth/Welcome';
import NotesList from './features/notes/NotesList';
import UsersList from './features/users/UsersList';
import EditUser from "./features/users/EditUser";
import NewUserForm from "./features/users/NewUserForm";
import EditNote from "./features/notes/EditNote";
import NewNote from "./features/notes/NewNote";
import Prefetch from './features/auth/Prefetch';
import NewNoteForm from "./features/notes/NewNoteForm";

const App = () => {

    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <Public /> },
                { path: "login", element: <Login /> },
                { 
                    path: "dash",
                    element: <Prefetch />,
                    children: [
                        {
                            element: <DashLayout />,
                            children: [
                                { index: true, element: <Welcome /> },
                                {
                                    path: "users",
                                    children: [
                                        { index: true, element: <UsersList /> },
                                        { path: ":id", element: <EditUser /> },
                                        { path: "new", element: <NewUserForm /> }
                                    ]
                                },
                                { 
                                    path: "notes",
                                    children: [
                                        { index: true, element: <NotesList /> },
                                        { path: ":id", element: <EditNote /> },
                                        { path: "new", element: <NewNote /> }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]);

    return (
        <>
            <RouterProvider router={routes} />
        </>
    );
};

export default App
