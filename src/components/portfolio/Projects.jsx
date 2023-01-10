import React from 'react'

const Projects = () => {
    return (
        <div className='portfolio__content'>
            <div className='portfolio__title'>Projects</div>

            <div className='portfolio__box'>
                <div className='portfolio__group'>
                    <div className='portfolio__data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='portfolio__name'><a href="https://ekoproekt-kr.ru/" target="blank_">Экопроект</a></h3>
                            <span className='portfolio__level'>Сайт-витрина магазина цветного металлопроката</span>
                        </div>
                    </div>

                    <div className='portfolio__data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='portfolio__name'><a href="https://bazamet.ru/" target="blank_">Базамет</a></h3>
                            <span className='portfolio__level'>Сайт-витрина магазина нержавеющего металлопроката</span>
                        </div>
                    </div>

                    <div className='portfolio__data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='portfolio__name'><a href="https://ekoproekt-energo.ru/" target="blank_">Экопреокт-энерго</a></h3>
                            <span className='portfolio__level'>Интернет-магазин солнечного энергетического оборудования</span>
                        </div>
                    </div>


                    <div className='portfolio__data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='portfolio__name'><a href="https://energy220.net/" target="blank_">Солар Центр</a></h3>
                            <span className='portfolio__level'>Сайт-визитка магазина солнечного энергетического оборудования</span>
                        </div>
                    </div>

                    <div className='portfolio__data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='portfolio__name'><a href="https://zoloto-1.com/" target="blank_">Zoloto-1</a></h3>
                            <span className='portfolio__level'>Интернет-магазин ювелирных изделий</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
