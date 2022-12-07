import React from 'react'

const Backend = () => {
	return (
		<div className='skills__content'>
			<div className='skills__title'>Backend</div>

			<div className='skills__box'>
				<div className='skills__group'>
					<div className='skills__data'>
						<i class='bx bx-badge-check'></i>

						<div>
							<h3 className='skills__name'>NodeJS</h3>
							<span className='skills__level'>Basic</span>
						</div>
					</div>

					<div className='skills__data'>
						<i class='bx bx-badge-check'></i>

						<div>
							<h3 className='skills__name'>Express</h3>
							<span className='skills__level'>Basic</span>
						</div>
					</div>

					<div className='skills__data'>
						<i class='bx bx-badge-check'></i>

						<div>
							<h3 className='skills__name'>Firebase</h3>
							<span className='skills__level'>Basic</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Backend