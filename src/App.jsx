import {Routes, Route} from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component.jsx";
import SignIn from "./routes/signin/sign.component.jsx";
import Home from "./routes/home/home.component.jsx";
import ContactUs from "./routes/contactus/contactus.component.jsx";
import Quiz from "./routes/quiz/quiz.component.jsx";
import Profile from "./routes/profile/profile.component.jsx";
import {useEffect, useState} from "react";

function App() {
    const initialProfile = {
        uid: '',
        name: '',
        email: '',
        photo: ''
    };
    const [user, setUser] = useState(initialProfile)
    useEffect(() => {
        setUser({
            uid: localStorage.getItem('Uid'),
            name: localStorage.getItem('Name'),
            email: localStorage.getItem('Email'),
            photo: localStorage.getItem('Photo'),
            score: localStorage.getItem('score')
        })
    }, []);
    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path='quiz' element={<Quiz profile={user}/>}/>
                <Route path='signin' element={<SignIn/>}/>
                <Route path='profile' element={<Profile profile={user}/>}/>
                <Route path='contactus' element={<ContactUs/>}/>
            </Route>
        </Routes>
    )
}

export default App
