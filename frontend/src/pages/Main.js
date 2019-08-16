
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import './Main.css';
import star from '../assets/star.svg';

export default function Main() {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        async function loadAlunos() {
            const response = await api.get('/alunos');
            setUsers(response.data);
        }
        loadAlunos();
    }, []);
    return(
        <div className="container">
            <h1><p>TÁBUA DE SELOS</p></h1>
            <p className="subtitle">ENCANTAR PARA VENDER</p>
                {users.length>0?(<div className="cardsContainer">
                    {users.map(user=>(
                        <div key={user.name} className="card">
                            <div className="name">{user.name}</div>

                            <div className="property">
                                <div className="propertyName">Cliente Digital</div>
                                <div className="propertyStar">
                                    {user.clienteDigital >=1 && <img src={star}/>}
                                </div>
                                <div className="propertyStar">
                                    {user.clienteDigital >=2 && <img src={star}/>}
                                </div>
                                <div className="propertyStar">
                                    {user.clienteDigital >=3 && <img src={star}/>}
                                </div>
                                <div className="propertyStar">
                                    {user.clienteDigital >=4 && <img src={star}/>}
                                </div>
                                <div className="propertyStar ultimo">
                                    {user.clienteDigital >=5 && <img src={star}/>}
                                </div>
                            </div>

                            <div className="property">
                                <div className="propertyName">Conhecendo o Cliente</div>
                                <div className="propertyStar">
                                    {user.conhecendo >=1 && <img src={star}/>}
                                </div>
                                <div className="propertyStar">
                                    {user.conhecendo >=2 && <img src={star}/>}
                                </div>
                                <div className="propertyStar">
                                    {user.conhecendo >=3 && <img src={star}/>}
                                </div>
                                <div className="propertyStar">
                                    {user.conhecendo >=4 && <img src={star}/>}
                                </div>
                                <div className="propertyStar ultimo">
                                    {user.conhecendo >=5 && <img src={star}/>}
                                </div>
                            </div>

                            <div className="property">
                                <div className="propertyName">Ciclo de Vendas</div>
                                <div className="propertyStar">
                                    {user.ciclo >=1 && <img src={star}/>}
                                </div>
                                <div className="propertyStar">
                                    {user.ciclo >=2 && <img src={star}/>}
                                </div>
                                <div className="propertyStar">
                                    {user.ciclo >=3 && <img src={star}/>}
                                </div>
                                <div className="propertyStar">
                                    {user.ciclo >=4 && <img src={star}/>}
                                </div>
                                <div className="propertyStar ultimo">
                                    {user.ciclo >=5 && <img src={star}/>}
                                </div>
                            </div>

                            <div className="property">
                                <div className="propertyName">PNL</div>
                                <div className="propertyStar">
                                    {user.pnl >=1 && <img src={star}/>}
                                </div>
                                <div className="propertyStar">
                                    {user.pnl >=2 && <img src={star}/>}
                                </div>
                                <div className="propertyStar">
                                    {user.pnl >=3 && <img src={star}/>}
                                </div>
                                <div className="propertyStar">
                                    {user.pnl >=4 && <img src={star}/>}
                                </div>
                                <div className="propertyStar ultimo">
                                    {user.pnl >=5 && <img src={star}/>}
                                </div>
                            </div>

                            <div className="property">
                                <div className="propertyName">Linguagem Corporal</div>
                                <div className="propertyStar">
                                    {user.linguagemCorporal >=1 && <img src={star}/>}
                                </div>
                                <div className="propertyStar">
                                    {user.linguagemCorporal >=2 && <img src={star}/>}
                                </div>
                                <div className="propertyStar">
                                    {user.linguagemCorporal >=3 && <img src={star}/>}
                                </div>
                                <div className="propertyStar">
                                    {user.linguagemCorporal >=4 && <img src={star}/>}
                                </div>
                                <div className="propertyStar ultimo">
                                    {user.linguagemCorporal >=5 && <img src={star}/>}
                                </div>
                            </div>

                            <div className="property">
                                <div className="propertyName">Encantamento</div>
                                <div className="propertyStar">
                                    {user.encantamento >=1 && <img src={star}/>}
                                </div>
                                <div className="propertyStar">
                                    {user.encantamento >=2 && <img src={star}/>}
                                </div>
                                <div className="propertyStar">
                                    {user.encantamento >=3 && <img src={star}/>}
                                </div>
                                <div className="propertyStar">
                                    {user.encantamento >=4 && <img src={star}/>}
                                </div>
                                <div className="propertyStar ultimo">
                                    {user.encantamento >=5 && <img src={star}/>}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>)
                :(<div>Não há alunos</div>)}
            


        </div>
    )
}