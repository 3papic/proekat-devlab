import React, { useEffect, useState } from 'react';
import useAxiosPrivate from "../hooks/useAxiosPrivate";

import useAuth from '../hooks/useAuth'; // Uvezite useAuth hook
import { Navigate } from 'react-router-dom';

function UserProfile() {
    const { auth } = useAuth(); // Dobijanje informacija o prijavi

    // Provera da li je korisnik prijavljen i ima privilegije
    if (!auth?.user || !auth?.user.isAdmin) {
        return <Navigate to="/login" />; // Preusmerite korisnika na stranicu za prijavu ako nema privilegije
    }
    return (
        <div>
        </div>
    );
}

export default UserProfile;