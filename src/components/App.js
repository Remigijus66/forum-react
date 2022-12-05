import './App.css';
import io from "socket.io-client"
import { useEffect, useState } from "react";
import MainContext from "./context/MainContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
// import UploadPage from './pages/UploadPage';
// import ListPage from './pages/ListPage';
// import WelcomePage from './pages/WecomePage';
import PersonalMessagePage from './pages/PersonalMessagePage';
import MessagePage from './pages/MessagePage';
import LeaderboardPage from './pages/LeaderboardPage';
import UserProfilePage from './pages/UserProfilePage';
import CreateDiscussionPage from './pages/CreateDiscussionPage';
import DiscussionPage from './pages/DiscussionPage';
import TopicPage from './pages/TopicPage';
import IndexPage from './pages/IndexPage';


const socket = io.connect('http://localhost:4001');


function App() {
    // used in auctions
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [time, setTime] = useState(null)
    const [price, setPrice] = useState(null)
    const [auctions, setAuctions] = useState([])
    const [showAuction, setShowAuction] = useState(false)
    const [id, setId] = useState('')
    const [singleAuction, setSingleAuction] = useState({})
    const [tick, setTick] = useState(false)
    const [showOpen, setShowOpen] = useState(true);
    const [showClosed, setShowClosed] = useState(true);
    // used in forum 
    const [sessionUser, setSessionUser] = useState({})
    const [userImage, setuserImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFUUgRMfIreBNH7C7UXCnE7Uk_vm_PR0jEgaAQxCGbNBD0rojxzh6QggsPF9Jk9v_ozYM&usqp=CAU")
    const [topic, setTopic] = useState('')
    const [discussions, setDiscussions] = useState([])
    const [discussion, setDiscussion] = useState({})
    const [discussionId, setDiscussionId] = useState('')
    const [comments, setComments] = useState([])
    const [replyComment, setReplyComment] = useState('')
    const [users, setUsers] = useState([])
    const [onlineUsers, setOnlineUsers,] = useState([])
    const [sender, setSender] = useState('')
    const [reciever, setReciever] = useState('')



    const states = {
        // used in auctions
        image, setImage,
        title, setTitle,
        time, setTime,
        price, setPrice,
        auctions, setAuctions,
        showAuction, setShowAuction,
        id, setId,
        singleAuction, setSingleAuction,
        socket,
        showOpen, setShowOpen,
        showClosed, setShowClosed,
        // used in forum 
        sessionUser, setSessionUser,
        userImage, setuserImage,
        topic, setTopic,
        discussions, setDiscussions,
        discussionId, setDiscussionId,
        discussion, setDiscussion,
        comments, setComments,
        replyComment, setReplyComment,
        users, setUsers,
        onlineUsers, setOnlineUsers,
        sender, setSender,
        reciever, setReciever

    }

    useEffect(() => {

        socket.on('login', (data, socket) => {
            console.log('login', data, socket)
            const user = {
                name: data,
                id: socket
            }
            const onlineUsersCopy = onlineUsers
            onlineUsersCopy.push(user)
            setOnlineUsers(onlineUsersCopy)
            console.log('onlineUsers', onlineUsers)

        })

        socket.on('logout', (data, socket) => {
            console.log('Logout', data, socket)
            let onlineUsersCopy = onlineUsers
            const index = onlineUsersCopy.findIndex(object => {
                return object.name === data;
            });
            console.log('index', index)
            onlineUsersCopy.splice(index, 1)
            setOnlineUsers(onlineUsersCopy)
            console.log('onlineUsers', onlineUsers)
        }
        )


        socket.on('user-disconnected', data => {
            console.log('poweroff', data)
            let onlineUsersCopy = onlineUsers
            const index = onlineUsersCopy.findIndex(object => {
                return object.id === data;
            });
            console.log('index', index)
            onlineUsersCopy.splice(index, 1)
            setOnlineUsers(onlineUsersCopy)
            console.log('onlineUsers', onlineUsers)

        }
        )



        // socket.on('updateList', () => {
        //   console.log('bid occured')
        //   downloadActualAuctions()
        // })


    }, [])


    return (
        <div >
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>

            <MainContext.Provider value={states}>



                <BrowserRouter>

                    {/* <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/welcome" element={<WelcomePage />} />
                        <Route path="/upload" element={<UploadPage />} />
                        <Route path="/list" element={<ListPage />} />

                    </Routes> */}


                    <Routes>
                        <Route path="/login" element={<LoginPage />} />

                        <Route path="/" element={<IndexPage />} />

                        <Route path="/topic" element={<TopicPage />} />

                        <Route path="/discussion" element={<DiscussionPage />} />2

                        <Route path="/createDiscussion" element={<CreateDiscussionPage />} />

                        <Route path="/profile" element={<UserProfilePage />} />

                        <Route path="/leaders" element={<LeaderboardPage />} />

                        <Route path="/message" element={<MessagePage />} />

                        <Route path="/pm" element={<PersonalMessagePage />} />




                    </Routes>

                </BrowserRouter>


            </MainContext.Provider>

        </div>
    );
}

export default App;
