import React from 'react'

const Frontend = () => {
    return (
        <div className='skills__content'>
            <div className='skills__title'>Technologies</div>

            <div className='skills__box'>
                <div className='skills__group'>
                    <div className='skills__data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>HTML</h3>
                            <span className='skills__level'>Advanced</span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>CSS</h3>
                            <span className='skills__level'>Advanced</span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>JavaScript</h3>
                            <span className='skills__level'>Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className='skills__group'>
                    <div className='skills__data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>Python</h3>
                            <span className='skills__level'>Basic</span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>SQL</h3>
                            <span className='skills__level'>Intermediate</span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>React</h3>
                            <span className='skills__level'>Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend
