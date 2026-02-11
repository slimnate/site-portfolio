<script lang="ts">
	import { onMount } from 'svelte';

	// Orbital constants
	const ORBITAL_MAX_ELECTRONS = new Map<number, number>([
		[1, 2],
		[2, 8],
		[3, 18],
		[4, 32]
	]);

	const ORBITAL_RADII = new Map<number, number>([
		[1, 25],
		[2, 40],
		[3, 55],
		[4, 70]
	]);

	/**
	 * Orbital class
	 * @param radius - The radius of the orbital
	 * @param electronCount - The number of electrons in the orbital
	 * @param centerX - The x coordinate of the center of the orbital
	 * @param centerY - The y coordinate of the center of the orbital
	 * @returns The orbital object
	 */
	class Orbital {
		public electrons: Electron[];
		private orbitalNumber: number;
		private centerX: number;
		private centerY: number;
		private radius: number;

		constructor(
			orbitalNumber: number,
			radius: number,
			electronCount: number,
			centerX: number,
			centerY: number
		) {
			this.electrons = [];
			this.orbitalNumber = orbitalNumber;
			this.centerX = centerX;
			this.centerY = centerY;
			this.radius = radius;

			const electronDistributionAngle = 360 / electronCount;
			let lastAngle = 0;
			for (let i = 0; i < electronCount; i++) {
				const angle = (lastAngle = lastAngle + electronDistributionAngle);
				const x = centerX + radius * Math.sin(angle * (Math.PI / 180));
				const y = centerY + radius * Math.cos(angle * (Math.PI / 180));

				this.electrons.push({
					id: `electron${orbitalNumber}-${i + 1}`,
					x,
					y,
					rotation: 0
				});
			}
		}

		public getOrbitalNumber() {
			return this.orbitalNumber;
		}

		public getCenterX() {
			return this.centerX;
		}

		public getCenterY() {
			return this.centerY;
		}

		public getRadius() {
			return this.radius;
		}
	}

	/**
	 * Electron type
	 * @param id - The id of the electron
	 * @param x - The x coordinate of the electron
	 * @param y - The y coordinate of the electron
	 * @param rotation - The rotation of the electron
	 * @returns The electron object
	 */
	type Electron = { id: string; x: number; y: number; rotation: number };

	/**
	 * Orbitals state
	 * @returns The orbitals array
	 */
	let orbitals = $state<Orbital[]>([]);

	// Viewbox constants
	const VIEWBOX_SIZE = 150;
	const centerX = VIEWBOX_SIZE / 2;
	const centerY = VIEWBOX_SIZE / 2;

	onMount(() => {
		let remainingElectrons = electronCount;

		// Generate each orbital based on the remaining electrons
		for (let orbitalNumber = 1; orbitalNumber <= 4; orbitalNumber++) {
			const radius = ORBITAL_RADII.get(orbitalNumber) ?? 0;
			const orbitalElectronCount = Math.min(
				remainingElectrons,
				ORBITAL_MAX_ELECTRONS.get(orbitalNumber) ?? 0
			);
			remainingElectrons = remainingElectrons - orbitalElectronCount;
			const orbital = new Orbital(orbitalNumber, radius, orbitalElectronCount, centerX, centerY);
			orbitals.push(orbital);
			if (remainingElectrons <= 0) {
				break;
			}
		}

		// Rotate the electrons every 50ms
		// setInterval(() => {
		// 	orbitals.forEach((orbital) => {
		// 		orbital.electrons.forEach((electron) => {
		// 			electron.rotation += 2;
		// 		});
		// 	});
		// }, 50);
	});

	let {
		electronCount = 16,
		nucleusFill = 'red',
		electronFill = 'blue',
		orbitalStroke = 'white'
	} = $props();
</script>

<div>
	<svg
		width="200"
		height="200"
		viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<!-- Nucleus -->
		<circle cx={centerX} cy={centerY} r="10" fill={nucleusFill} />

		{#each orbitals as orbital}
			<circle
				cx={orbital.getCenterX()}
				cy={orbital.getCenterY()}
				r={orbital.getRadius()}
				stroke={orbitalStroke}
				stroke-width="2"
			/>

			{#each orbital.electrons as electron}
				<circle
					id={electron.id}
					cx={electron.x}
					cy={electron.y}
					r="5"
					fill={electronFill}
					class="electron-orbit-{orbital.getOrbitalNumber()}"
					style="transform-origin: {centerX}px {centerY}px;"
				/>
			{/each}
		{/each}
	</svg>
</div>

<style lang="scss">
	.electron-orbit-1 {
		animation: electron-orbit 5s linear infinite;
	}
	.electron-orbit-2 {
		animation: electron-orbit 10s linear infinite;
	}
	.electron-orbit-3 {
		animation: electron-orbit 15s linear infinite;
	}
	.electron-orbit-4 {
		animation: electron-orbit 20s linear infinite;
	}
	:global {
		@keyframes electron-orbit {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
		}
	}
</style>
