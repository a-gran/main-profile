import React from 'react'

const Contact = () => {
	return (
		<section className="contact section contact">
			<h2 className='section__title'>Get in touch</h2>
			<span className='section__subtitle'>Contact Me</span>

			<div className="contact__container container grid">
				<div className="contact__content">
					<h3 className="contact__title">Talk to me</h3>

					<div className="contact__info">
						<div className="contact__card">
							<i className="bx bx contact__card-icon"></i>
						</div>
					</div>
				</div>

				<div className="contact__content">
					<div className="contact__title">Write me your project</div>
				</div>
			</div>
		</section>
	)
}

export default Contact