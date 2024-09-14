import React, { useContext, useState } from 'react'
import { Header } from '../../Layouts/Header/Header'
import { Main } from '../../Layouts/Main/Main'
import { v4 as uuidv4 } from 'uuid'
import { ContainerTasks } from '../../Layouts/ContainerTasks/ContainerTasks'
import { ItemTask } from '../../ItemTask/ItemTask'
import { taskContext } from '../../Context/Context'
import { NewTask } from '../../NewTask/NewTask'
import './Home.css'
import { InfoTasks } from '../../Layouts/InfoTasks/InfoTasks'
import { FilterTasks } from '../../FilterTasks/FilterTasks'
import profile from '../../../assets/sol.jpg'



export const Home = () => {
const context= useContext(taskContext)
    return (
    <>
    <Header>
        <div className='container-header-1'>
            <div className='container-title'>
            <h1 className='title-header'>Gestor de Tareas</h1>
            </div>
            <div className='container-img'>
                <img className='img-profile' src={profile} alt="Logo" />
            </div>
        </div>
        <NewTask/>
        <InfoTasks/>
        <FilterTasks/>
    </Header>
    <Main>
        <ContainerTasks>
            {
            context.filteredTasks.map(task => <ItemTask key={task.id} idTask={task.id} content={task.description} titleTask={task.title} />)
            }
        </ContainerTasks>
    </Main>
    </>
    )
}


