import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import star from '../assets/star.svg';
// import './Main.css';
import './Admin.css';

export default function Admin() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        async function loadAlunos() {
            const response = await api.get('/alunos');
            setUsers(response.data);
        }
        loadAlunos();
    }, []);

    async function refresh() {
        const response = await api.get('/alunos');
        setUsers(response.data);
    }

    async function handlePlus(user, property) {
        if(user[property] >= 5){
            return;
        }
        user[property]++;
        await api.put(`/alunos/${user.name}`, user);
        refresh();
    }

    async function handleMinus(user, property) {
        if(user[property] <= 0){
            return;
        }
        user[property]--;
        await api.put(`/alunos/${user.name}`, user);
        refresh();
    }
    
    async function handleDelete(user) {
        await api.delete('/alunos',{data:{name: user.name}})
        refresh();
    }

    async function handleCreate() {
        let nome = document.getElementById('novoAluno').value;
        await api.post('/alunos', {name: nome});
        refresh();
    }

    return(
        <div className="container">
            <h1><p>TÁBUA DE SELOS ADMIN</p></h1>

            <div className="cardsContainer">
                <p className="card novoAluno">
                    <input type="text" id="novoAluno" placeholder="qual o nome do aluno?"/>
                    <button onClick={handleCreate}>Novo Aluno</button>
                </p>
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
                                <div className="propertyStar ">
                                    {user.clienteDigital >=5 && <img src={star}/>}
                                </div>
                                <div className="botoes">
                                    <button className="mais botao" onClick={()=>handlePlus(user, 'clienteDigital')}>+</button>
                                    <button className="menos botao" onClick={()=>handleMinus(user, 'clienteDigital')}>-</button>
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
                                <div className="propertyStar ">
                                    {user.conhecendo >=5 && <img src={star}/>}
                                </div>
                                <div className="botoes">
                                    <button className="mais botao" onClick={()=>handlePlus(user, 'conhecendo')}>+</button>
                                    <button className="menos botao" onClick={()=>handleMinus(user, 'conhecendo')}>-</button>
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
                                <div className="propertyStar ">
                                    {user.ciclo >=5 && <img src={star}/>}
                                </div>
                                <div className="botoes">
                                    <button className="mais botao" onClick={()=>handlePlus(user, 'ciclo')}>+</button>
                                    <button className="menos botao" onClick={()=>handleMinus(user, 'ciclo')}>-</button>
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
                                <div className="propertyStar ">
                                    {user.pnl >=5 && <img src={star}/>}
                                </div>
                                <div className="botoes">
                                    <button className="mais botao" onClick={()=>handlePlus(user, 'pnl')}>+</button>
                                    <button className="menos botao" onClick={()=>handleMinus(user, 'pnl')}>-</button>
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
                                <div className="propertyStar ">
                                    {user.linguagemCorporal >=5 && <img src={star}/>}
                                </div>
                                <div className="botoes">
                                    <button className="mais botao" onClick={()=>handlePlus(user, 'linguagemCorporal')}>+</button>
                                    <button className="menos botao" onClick={()=>handleMinus(user, 'linguagemCorporal')}>-</button>
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
                                <div className="propertyStar ">
                                    {user.encantamento >=5 && <img src={star}/>}
                                </div>
                                <div className="botoes">
                                    <button className="mais botao" onClick={()=>handlePlus(user, 'encantamento')}>+</button>
                                    <button className="menos botao" onClick={()=>handleMinus(user, 'encantamento')}>-</button>
                                </div>
                            </div>

                        <p>
                            <button className="delete" onClick={()=>handleDelete(user)}>DELETE</button>
                        </p>
                        </div>
                    ))}
                </div>)
                :(<div>Não há alunos</div>)}

            </div>
        </div>
    );
}