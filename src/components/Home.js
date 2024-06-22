import React, { useEffect } from 'react';
import { getAuth, signOut  } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Icon from '@mdi/react';
import {auth} from '../firebase.js';
import { mdiHomeOutline, 
         mdiHeartOutline, 
         mdiBellOutline,
         mdiMessageOutline,
         mdiDotsVertical,
         mdiMagnify,
         mdiAccountFilterOutline
       } from '@mdi/js';

export const Home = () => {
    const navigate = useNavigate();
    useEffect(() => { 
        const auth = getAuth();
        const user = auth.currentUser;
        if(user == null){
            navigate('/login');
        }
    }, []);
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
        });
    }
    return (
        <div className="bg-gray w-3/4">
            <a onClick={ handleLogout } className='cursor-pointer text-right'> logout </a>
           <div className='home grid gap-4'>
                <div className="logo bg-white py-3 px-8 rounded-2xl" style={{gridArea: 'header'}}>
                    LOGO
                </div>
                <div className="bg-white col-span-2 rounded-2xl px-8 py-3 inline-flex" style={{gridArea: 'search'}}>
                    <Icon path={mdiMagnify}
                        size={1}
                        className='mt-1'
                    />
                    <input type='text' placeholder='search' />
                    <div class="flex w-full flex-row-reverse">
                        <Icon path={mdiAccountFilterOutline}
                            size={1}
                            className='mt-1'
                        />
                    </div>
                </div>
                <div className="seller text-white py-8 text-center rounded-2xl" style={{gridArea: 'seller'}}>
                    Become a Seller
                </div>


                <div className="bg-white py-3 px-8 rounded-2xl" style={{gridArea: 'sidebar'}}>
                    <ul class="sidenav">
                        <li class="flex">
                            <Icon path={mdiHomeOutline}
                                size={1}
                                className='mt-1'
                            />
                            <span className='ml-2'>
                              Home
                            </span>
                             
                        </li>

                        <li class="flex">
                            <Icon path={mdiBellOutline}
                                size={1}
                                className='mt-1'
                            />
                            <div className='ml-2'>
                              Notifications
                            </div>
                        </li>


                        <li class="flex">
                            <Icon path={mdiHeartOutline}
                                size={1}
                                className='mt-1'
                            />
                            <span className='ml-2'>
                              Shop
                            </span>
                             
                        </li>

                        <li class="flex">
                            <Icon path={mdiMessageOutline}
                                size={1}
                                className='mt-1'
                            />
                            <span className='ml-2'>
                              Conversations
                            </span>
                             
                        </li>
                    </ul>
                </div>

                <div className="bg-white rounded-2xl p-3" style={{gridArea: 'main'}}>
                    <div className='flex'>
                        <img src="/dp.png" />
                        <div className='ml-2'> Lara leones</div> 
                        <div> @theWallart</div>
                        <div class="flex w-full flex-row-reverse">
                            <Icon path={mdiDotsVertical}
                                size={1}
                                className='mt-1'
                            />
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}
