import React from 'react';
import  { Redirect } from 'react-router-dom';
import { render } from '@testing-library/react';
import axios from 'axios';

let url = 'http://localhost:8000/api/quiz';
const linkki = "/kysymykset";

export function tarkista(oikein) {
    if(oikein) {
        //uusi kysymys
        console.log(oikein);
    } else {
        //game over ja pisteet
        console.log(oikein);
    }
}

export function kirjaudu(nimi) {
    if (!nimi) {
        console.log('nimi puuttuu');
        return 
    } else {
        //lähetä nimi palvelimelle ja siirry pelisivulle
        postKayttaja({nimi: nimi});
        sessionStorage.clear();
        sessionStorage.setItem("1", nimi);
        //kerätään käyttäjältä tieto ja laitetaan se sessionstorageen myöhempää käyttöä varten -Oskari
    return(  window.location.href="/kysymykset" )
}}

async function postKayttaja(nimi) {
    //lisää käyttäjä tietokantaan
    await axios.post(`${url}/kayttajat`, nimi)
    .then(res => {
        return res.data;
    });
 }

export const haeHighScore = async () => {
     let scoret = await axios.get(`${url}/pisteet`)
     return scoret.data;
 } 

 export const haeAllTimeHighScore = async () => {
    let scoret = await axios.get(`${url}/kaikkipisteet`)
    return scoret.data;
} 

export const haeKuukaudenTimeHighScore = async (kk, yyyy) => {
    let scoret = await axios.get(`${url}/pisteet/${kk}/${yyyy}`)
    return scoret.data;
} 