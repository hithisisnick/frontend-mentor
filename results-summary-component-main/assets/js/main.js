import data from '../../data.json' assert { type: 'json' };

let summaryList = document.querySelector('.results__list');

summaryList.innerHTML = data
	.map((e) => {
		return `
		<li class="results__item">
				<div class="results__content ${
					e.category === 'Reaction'
						? 'results__content--red'
						: e.category === 'Memory'
						? 'results__content--yellow'
						: e.category === 'Verbal'
						? 'results__content--green'
						: 'results__content--blue'
				}">
					<div class="results__category">
						<img
							src="${e.icon}"
							alt="${e.category} Icon" />
						<p class="results__text">${e.category}</p>
					</div>
					<div class="results__scores">
						<p class="scored">${e.score}&nbsp;</p>
						<p class="total">/ 100</p>
					</div>
				</div>
			</li>
		`;
	})
	.join('');
