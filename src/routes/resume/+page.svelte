<script lang="ts">
	import BounceLink from '$lib/components/BounceLink.svelte';
	import SkillIcon from '$lib/components/SkillIcon.svelte';

	const job_spotliteTech = [
		{ skill: 'svelte', name: 'SvelteKit' },
		{ skill: 'tailwind', name: 'Tailwind CSS' },
		{ skill: 'convex', name: 'Convex' },
		{ skill: 'workos', name: 'WorkOS AuthKit' },
		{ skill: 'nodejs', name: 'Node.js' },
		{ skill: 'ts', name: 'TypeScript' },
		{ skill: 'vite', name: 'Vite' },
		{ skill: 'netlify', name: 'Netlify' },
		{ skill: 'git', name: 'Git' }
	];

	const job_cernerTech = [
		{ skill: 'cs', name: 'C#' },
		{ skill: 'dotnet', name: '.NET Framework' },
		{ skill: 'wpf', name: 'WPF' },
		{ skill: 'nodejs', name: 'Node.js' },
		{ skill: 'express', name: 'Express' },
		{ skill: 'socketio', name: 'Socket.IO' },
		{ skill: 'mongodb', name: 'MongoDB' },
		{ skill: 'mysql', name: 'MySQL' },
		{ skill: 'html', name: 'HTML' },
		{ skill: 'css', name: 'CSS' },
		{ skill: 'js', name: 'JavaScript' },
		{ skill: 'jquery', name: 'jQuery' },
		{ skill: 'bootstrap', name: 'Bootstrap' },
		{ skill: 'git', name: 'Git' }
	];

	const job_powerschoolTech = [
		{ skill: 'chrome', name: 'Google Chrome' },
		{ skill: 'salesforce', name: 'SalesForce' },
		{ skill: 'jira', name: 'JIRA' }
	];

	const skills_languages = [
		{ skill: 'js', name: 'JavaScript' },
		{ skill: 'ts', name: 'TypeScript' },
		{ skill: 'cs', name: 'C#' },
		{ skill: 'html', name: 'HTML' },
		{ skill: 'css', name: 'CSS' },
		{ skill: 'cpp', name: 'C++' },
		{ skill: 'java', name: 'Java' },
		{ skill: 'ruby', name: 'Ruby' },
		{ skill: 'php', name: 'PHP' },
		{ skill: 'py', name: 'Python' }
	];

	const skills_frameworks = [
		{ skill: 'svelte', name: 'SvelteKit' },
		{ skill: 'react', name: 'React' },
		{ skill: 'electron', name: 'Electron' },
		{ skill: 'nodejs', name: 'Node.js' },
		{ skill: 'wpf', name: 'WPF' },
		{ skill: 'rails', name: 'Ruby on Rails' },
		{ skill: 'jekyll', name: 'Jekyll' }
	];

	const skills_database = [
		{ skill: 'convex', name: 'Convex' },
		{ skill: 'mongodb', name: 'MongoDB' },
		{ skill: 'mysql', name: 'MySQL' },
		{ skill: 'postgres', name: 'PostgreSQL' },
		{ skill: 'sqlite', name: 'SQLite' }
	];

	const skills_cloud = [
		{ skill: 'netlify', name: 'Netlify' },
		{ skill: 'railway', name: 'Railway' },
		{ skill: 'redhat', name: 'RedHat/Fedora' },
		{ skill: 'gcp', name: 'GCP' }
	];

	const skills_tools = [
		{ skill: 'git', name: 'Git' },
		{ skill: 'vscode', name: 'VS Code' },
		{ skill: 'cursor', name: 'Cursor' },
		{ skill: 'visualstudio', name: 'Visual Studio' },
		{ skill: 'npm', name: 'npm' },
		{ skill: 'bash', name: 'CLI' },
		{ skill: 'github', name: 'GitHub' },
		{ skill: 'bitbucket', name: 'Bitbucket' },
		{ skill: 'neovim', name: 'Neovim' },
		{ skill: 'postman', name: 'Postman' }
	];

	const skills_systems = [
		{ skill: 'windows', name: 'Windows' },
		{ skill: 'arch', name: 'Arch Linux' },
		{ skill: 'linux', name: 'Linux' },
		{ skill: 'powershell', name: 'PowerShell' },
		{ skill: 'bash', name: 'Bash' }
	];

	const project_workosConvexSvelitekitTech = [
		{ skill: 'workos', name: 'WorkOS' },
		{ skill: 'convex', name: 'Convex' },
		{ skill: 'svelte', name: 'SvelteKit' },
		{ skill: 'ts', name: 'TypeScript' },
		{ skill: 'nodejs', name: 'Node.js' }
	];

	const project_skillProgressTech = [
		{ skill: 'ts', name: 'TypeScript' },
		{ skill: 'express', name: 'Express' },
		{ skill: 'netlify', name: 'Netlify' },
		{ skill: 'railway', name: 'Railway' },
		{ skill: 'npm', name: 'npm' },
		{ skill: 'svg', name: 'SVG' }
	];

	const project_electronIpcApiTech = [
		{ skill: 'js', name: 'JavaScript' },
		{ skill: 'nodejs', name: 'Node.js' },
		{ skill: 'electron', name: 'Electron' },
		{ skill: 'npm', name: 'npm' }
	];

	const project_keeperTech = [
		{ skill: 'react', name: 'React' },
		{ skill: 'electron', name: 'Electron' },
		{ skill: 'ts', name: 'TypeScript' }
	];

	const project_renvintoryTech = [
		{ skill: 'svelte', name: 'SvelteKit' },
		{ skill: 'tailwind', name: 'Tailwind CSS' },
		{ skill: 'ts', name: 'TypeScript' },
		{ skill: 'convex', name: 'Convex' },
		{ skill: 'netlify', name: 'Netlify' }
	];

	const project_laserBeamTech = [
		{ skill: 'cs', name: 'C#' },
		{ skill: 'nodejs', name: 'Node.js' },
		{ skill: 'mongodb', name: 'MongoDB' }
	];

	const project_supportToolTech = [
		{ skill: 'chrome', name: 'Google Chrome' },
		{ skill: 'js', name: 'JavaScript' },
		{ skill: 'html', name: 'HTML' },
		{ skill: 'css', name: 'CSS' }
	];

	const project_reptileHumidityTech = [
		{ skill: 'cpp', name: 'C++' },
		{ skill: 'dart', name: 'Dart' },
		{ skill: 'flutter', name: 'Flutter' }
	];
</script>

<main class="z-1 mx-auto flex h-full max-w-7xl flex-col justify-center px-12 lg:px-32">
	<div class="">
		<!-- Header -->
		<div class="flex flex-col">
			<h1
				class="text-4xl font-bold text-midnight-500 drop-shadow-md drop-shadow-midnight-900 sm:text-5xl md:text-6xl"
			>
				Nathan Hoyt
			</h1>
			<p
				class="my-4 text-2xl font-bold text-platinum drop-shadow-md drop-shadow-midnight-900 sm:text-3xl"
			>
				Software Engineer | Full-Stack Developer
			</p>
			<p class="text-lg leading-1 text-platinum drop-shadow-md drop-shadow-midnight-900">
				Kansas City, MO
			</p>
			<div class="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm sm:text-base">
				<BounceLink href="mailto:nathanstg@gmail.com">nathanstg@gmail.com</BounceLink>
				<BounceLink href="https://nathanhoyt.dev">nathanhoyt.dev</BounceLink>
				<BounceLink href="https://github.com/slimnate">github.com/slimnate</BounceLink>
			</div>
		</div>

		<!-- Professional Summary -->
		<h2
			class="mt-12 text-center text-4xl font-bold text-midnight-400 drop-shadow-md drop-shadow-midnight-900"
		>
			Summary
		</h2>
		<p
			class="mt-8 text-base/7 leading-snug text-platinum drop-shadow-md drop-shadow-midnight-900 md:leading-normal"
		>
			Full-stack software developer with 4+ years of experience developing production applications.
			Founded Spotlite Studios in 2025, a web development agency focused on small businesses in KC,
			with 5 published websites and 100+ generated conversions so far. Experience developing Node.js
			web services and C# desktop applications for healthcare systems at Cerner, as well as
			supporting education management software at PowerSchool. Expert in modern front-end frameworks
			(SvelteKit), real-time databases (Convex) and authentication systems (WorkOS). Passionate
			about learning new skills and developing beautiful and performant applications with great user
			experiences.
		</p>

		<!-- Work Experience -->
		<h2
			class="mt-12 text-center text-4xl font-bold text-midnight-400 drop-shadow-md drop-shadow-midnight-900"
		>
			Experience
		</h2>

		<!-- Spotlite Studios -->
		<div class="mt-8 rounded-3xl border-2 border-platinum/20 bg-midnight-500/15 p-6 sm:p-8">
			<h3
				class="text-2xl font-bold text-platinum drop-shadow-md drop-shadow-midnight-900 sm:text-3xl"
			>
				Spotlite Studios
			</h3>
			<p class="mt-1 text-lg font-bold text-midnight-400">Founder and Lead Developer</p>
			<p class="text-sm text-midnight-300">Kansas City, MO | April 2025 - Present</p>
			<p
				class="mt-4 text-base/7 leading-snug text-platinum drop-shadow-md drop-shadow-midnight-900 md:leading-normal"
			>
				Founded a web development agency serving small businesses in the Kansas City area. Portfolio
				of 5 published websites with 100+ booking leads generated so far for my clients. Manage
				projects along the entire lifecycle — gathering requirements, developing, hosting, and
				continued support and maintenance.
			</p>
			<h4 class="mt-6 text-lg font-bold text-midnight-400">Key Achievements</h4>
			<ul
				class="mt-2 list-disc space-y-1 pl-6 text-sm/6 leading-snug text-platinum drop-shadow-md drop-shadow-midnight-900"
			>
				<li>
					Designed, developed, and deployed 5 production websites using SvelteKit, Tailwind, and
					Convex
				</li>
				<li>Implemented secure authentication with WorkOS AuthKit for client admin dashboards</li>
				<li>
					Created booking system with email notifications and dashboard for tracking, as well as a
					CMS for blog posts
				</li>
				<li>Achieved 100% client retention with responsive support and regular maintenance</li>
				<li>Managed client relations, project scoping, and technical consulting</li>
			</ul>
			<h4 class="mt-6 text-lg font-bold text-midnight-400">Client Portfolio</h4>
			<ul
				class="mt-2 list-disc space-y-1 pl-6 text-sm/6 leading-snug text-platinum drop-shadow-md drop-shadow-midnight-900"
			>
				<li>
					<BounceLink href="https://spotlitestudios.com">Spotlite Studios</BounceLink> — Agency website
					with booking system, blog, and custom CMS/admin dashboard
				</li>
				<li>
					<BounceLink href="https://sincerelyselfcare.life">Sincerely, Selfcare</BounceLink> — Mobile
					massage therapy service with blog and custom CMS
				</li>
				<li>
					<BounceLink href="https://kcfairway.com">KC Fairway Bodywork</BounceLink> — Sports massage for
					golfers with blog and custom CMS
				</li>
				<li>
					<BounceLink href="https://dreamcapture.co">Dream Capture Co</BounceLink> — Photography portfolio
					with booking system
				</li>
				<li>
					<BounceLink href="https://kirascarskc.com">Kira's Cars KC</BounceLink> — Mobile detailing service
					with booking system
				</li>
			</ul>
			<div class="mt-6">
				<h4 class="text-lg font-bold text-midnight-400">Technologies</h4>
				<div class="mt-2 flex flex-wrap gap-3">
					{#each job_spotliteTech as tech}
						<SkillIcon skill={tech.skill} name={tech.name} size={32} />
					{/each}
				</div>
			</div>
		</div>

		<!-- Cerner -->
		<div class="mt-8 rounded-3xl border-2 border-platinum/20 bg-midnight-500/15 p-6 sm:p-8">
			<h3
				class="text-2xl font-bold text-platinum drop-shadow-md drop-shadow-midnight-900 sm:text-3xl"
			>
				Cerner Corporation
			</h3>
			<p class="mt-1 text-lg font-bold text-midnight-400">Software Engineering Intern</p>
			<p class="text-sm text-midnight-300">Kansas City | June 2013 - March 2016</p>
			<p
				class="mt-4 text-base/7 leading-snug text-platinum drop-shadow-md drop-shadow-midnight-900 md:leading-normal"
			>
				Developed and maintained enterprise software solutions for use by the client support team in
				an agile environment. Progressed to the lead developer on a C# desktop application providing
				support agents instant access to client information. Developed additional tools to collect
				and centralize logging data for analytics.
			</p>
			<h4 class="mt-6 text-lg font-bold text-midnight-400">Key Accomplishments</h4>
			<ul
				class="mt-2 list-disc space-y-1 pl-6 text-sm/6 leading-snug text-platinum drop-shadow-md drop-shadow-midnight-900"
			>
				<li>
					Developed and maintained a C# desktop application providing customer support team instant
					access to real-time client data, improving support efficiency
				</li>
				<li>
					Built Node.js web services with REST and Socket.IO for real-time data delivery to desktop
					and web applications
				</li>
				<li>
					Authored "LaserBeam" — a log collection framework that centralized error logs from desktop
					and web apps into a database for analytics
				</li>
				<li>Created front-end web applications using HTML, CSS, Bootstrap, and jQuery</li>
				<li>
					Collaborated with cross-functional teams in agile environment within regulated healthcare
					industry
				</li>
			</ul>
			<div class="mt-6">
				<h4 class="text-lg font-bold text-midnight-400">Technologies</h4>
				<div class="mt-2 flex flex-wrap gap-3">
					{#each job_cernerTech as tech}
						<SkillIcon skill={tech.skill} name={tech.name} size={32} />
					{/each}
				</div>
			</div>
		</div>

		<!-- PowerSchool -->
		<div class="mt-8 rounded-3xl border-2 border-platinum/20 bg-midnight-500/15 p-6 sm:p-8">
			<h3
				class="text-2xl font-bold text-platinum drop-shadow-md drop-shadow-midnight-900 sm:text-3xl"
			>
				PowerSchool Group LLC
			</h3>
			<p class="mt-1 text-lg font-bold text-midnight-400">Technical Support Engineer</p>
			<p class="text-sm text-midnight-300">Shawnee, KS | July 2018 - July 2019</p>
			<p
				class="mt-4 text-base/7 leading-snug text-platinum drop-shadow-md drop-shadow-midnight-900 md:leading-normal"
			>
				Provided technical support for applicant tracking software in the education sector,
				troubleshooting complex issues and collaborating with engineering teams to resolve
				customer-reported bugs. Worked with large customers to manage complex updates to their job
				application forms and test updates to ensure proper functionality.
			</p>
			<h4 class="mt-6 text-lg font-bold text-midnight-400">Key Responsibilities</h4>
			<ul
				class="mt-2 list-disc space-y-1 pl-6 text-sm/6 leading-snug text-platinum drop-shadow-md drop-shadow-midnight-900"
			>
				<li>
					Troubleshot customer issues with web-based software via phone, email, and SalesForce cases
				</li>
				<li>
					Analyzed customer-software interactions to determine root cause of issues and implement
					solutions
				</li>
				<li>Documented issues, recreation steps, and resolutions in support knowledge base</li>
				<li>
					Developed innovative Google Chrome extension to improve efficiency of daily processes for
					support team
				</li>
				<li>
					Assisted with new employee onboarding and acted as a go-to resource for team members with
					technical questions
				</li>
			</ul>
			<div class="mt-6">
				<h4 class="text-lg font-bold text-midnight-400">Technologies</h4>
				<div class="mt-2 flex flex-wrap gap-3">
					{#each job_powerschoolTech as tech}
						<SkillIcon skill={tech.skill} name={tech.name} size={32} />
					{/each}
				</div>
			</div>
		</div>

		<!-- Jack Stack BBQ -->
		<div class="mt-8 rounded-3xl border-2 border-platinum/20 bg-midnight-500/15 p-6 sm:p-8">
			<h3
				class="text-2xl font-bold text-platinum drop-shadow-md drop-shadow-midnight-900 sm:text-3xl"
			>
				Jack Stack BBQ
			</h3>
			<p class="mt-1 text-lg font-bold text-midnight-400">Bartender</p>
			<p class="text-sm text-midnight-300">Overland Park, KS | June 2021 - Present</p>
			<p
				class="mt-4 text-base/7 leading-snug text-platinum drop-shadow-md drop-shadow-midnight-900 md:leading-normal"
			>
				Provide exceptional customer service in a high-volume restaurant environment. Demonstrate
				reliability through 5 years of continuous employment. Manage multiple priorities while
				maintaining quality and efficiency.
			</p>
		</div>

		<!-- Technical Skills -->
		<h2
			class="mt-12 text-center text-4xl font-bold text-midnight-400 drop-shadow-md drop-shadow-midnight-900"
		>
			Technical Skills
		</h2>
		<div class="mt-8 rounded-3xl border-2 border-platinum/20 bg-midnight-500/15 p-6 sm:p-8">
			<div class="grid gap-6 sm:grid-cols-2">
				<div>
					<h4 class="text-lg font-bold text-midnight-400">Languages</h4>
					<div class="mt-2 flex flex-wrap gap-3">
						{#each skills_languages as tech}
							<SkillIcon skill={tech.skill} name={tech.name} size={32} />
						{/each}
					</div>
				</div>
				<div>
					<h4 class="text-lg font-bold text-midnight-400">Frameworks</h4>
					<div class="mt-2 flex flex-wrap gap-3">
						{#each skills_frameworks as tech}
							<SkillIcon skill={tech.skill} name={tech.name} size={32} />
						{/each}
					</div>
				</div>
				<div>
					<h4 class="text-lg font-bold text-midnight-400">Databases</h4>
					<div class="mt-2 flex flex-wrap gap-3">
						{#each skills_database as tech}
							<SkillIcon skill={tech.skill} name={tech.name} size={32} />
						{/each}
					</div>
				</div>
				<div>
					<h4 class="text-lg font-bold text-midnight-400">Cloud & Hosting</h4>
					<div class="mt-2 flex flex-wrap gap-3">
						{#each skills_cloud as tech}
							<SkillIcon skill={tech.skill} name={tech.name} size={32} />
						{/each}
					</div>
				</div>
				<div>
					<h4 class="text-lg font-bold text-midnight-400">Tools</h4>
					<div class="mt-2 flex flex-wrap gap-3">
						{#each skills_tools as tech}
							<SkillIcon skill={tech.skill} name={tech.name} size={32} />
						{/each}
					</div>
				</div>
				<div>
					<h4 class="text-lg font-bold text-midnight-400">Systems</h4>
					<div class="mt-2 flex flex-wrap gap-3">
						{#each skills_systems as tech}
							<SkillIcon skill={tech.skill} name={tech.name} size={32} />
						{/each}
					</div>
				</div>
			</div>
		</div>

		<!-- Projects -->
		<h2
			class="mt-12 text-center text-4xl font-bold text-midnight-400 drop-shadow-md drop-shadow-midnight-900"
		>
			Projects
		</h2>

		<h3 class="mt-8 text-2xl font-bold text-platinum drop-shadow-md drop-shadow-midnight-900">
			Professional
		</h3>
		<div class="mt-4 space-y-4">
			<div class="rounded-3xl border-2 border-platinum/20 bg-midnight-500/15 p-6 sm:p-8">
				<h4 class="text-lg font-bold text-midnight-400">LaserBeam</h4>
				<p
					class="mt-2 text-sm/6 leading-snug text-platinum drop-shadow-md drop-shadow-midnight-900 md:leading-normal"
				>
					Project at Cerner that collected application logs to a centralized database for analysis.
				</p>
				<div class="mt-4 flex flex-wrap gap-3">
					{#each project_laserBeamTech as tech}
						<SkillIcon skill={tech.skill} name={tech.name} size={32} />
					{/each}
				</div>
			</div>
			<div class="rounded-3xl border-2 border-platinum/20 bg-midnight-500/15 p-6 sm:p-8">
				<h4 class="text-lg font-bold text-midnight-400">Support Tool</h4>
				<p
					class="mt-2 text-sm/6 leading-snug text-platinum drop-shadow-md drop-shadow-midnight-900 md:leading-normal"
				>
					Google Chrome extension to vastly improve customer support efficiency for support team at
					PowerSchool.
				</p>
				<div class="mt-4 flex flex-wrap gap-3">
					{#each project_supportToolTech as tech}
						<SkillIcon skill={tech.skill} name={tech.name} size={32} />
					{/each}
				</div>
			</div>
		</div>

		<h3 class="mt-8 text-2xl font-bold text-platinum drop-shadow-md drop-shadow-midnight-900">
			NPM Packages
		</h3>
		<div class="mt-4 space-y-4">
			<div class="rounded-3xl border-2 border-platinum/20 bg-midnight-500/15 p-6 sm:p-8">
				<h4 class="text-lg font-bold text-midnight-400">
					<BounceLink href="https://npmjs.com/workos-convex-sveltekit"
						>workos-convex-sveltekit</BounceLink
					>
				</h4>
				<p
					class="mt-2 text-sm/6 leading-snug text-platinum drop-shadow-md drop-shadow-midnight-900 md:leading-normal"
				>
					Library that simplifies integration of WorkOS AuthKit and Convex database in SvelteKit
					projects.
				</p>
				<div class="mt-4 flex flex-wrap gap-3">
					{#each project_workosConvexSvelitekitTech as tech}
						<SkillIcon skill={tech.skill} name={tech.name} size={32} />
					{/each}
				</div>
			</div>
			<div class="rounded-3xl border-2 border-platinum/20 bg-midnight-500/15 p-6 sm:p-8">
				<h4 class="text-lg font-bold text-midnight-400">
					<BounceLink href="https://npmjs.com/eipc-api">electron-ipc-api</BounceLink>
				</h4>
				<p
					class="mt-2 text-sm/6 leading-snug text-platinum drop-shadow-md drop-shadow-midnight-900 md:leading-normal"
				>
					Package to generate an API that facilitates communication between the main process and
					render process in Electron apps.
				</p>
				<div class="mt-4 flex flex-wrap gap-3">
					{#each project_electronIpcApiTech as tech}
						<SkillIcon skill={tech.skill} name={tech.name} size={32} />
					{/each}
				</div>
			</div>
		</div>

		<h3 class="mt-8 text-2xl font-bold text-platinum drop-shadow-md drop-shadow-midnight-900">
			Side Projects
		</h3>
		<div class="mt-4 space-y-4">
			<div class="rounded-3xl border-2 border-platinum/20 bg-midnight-500/15 p-6 sm:p-8">
				<h4 class="text-lg font-bold text-midnight-400">
					<BounceLink href="https://github.com/slimnate/skill-progress">Skill-progress</BounceLink>
				</h4>
				<p
					class="mt-2 text-sm/6 leading-snug text-platinum drop-shadow-md drop-shadow-midnight-900 md:leading-normal"
				>
					Microservice for generating an image that visually showcases skill level in a specific
					technology.
				</p>
				<div class="mt-4 flex flex-wrap gap-3">
					{#each project_skillProgressTech as tech}
						<SkillIcon skill={tech.skill} name={tech.name} size={32} />
					{/each}
				</div>
			</div>
			<div class="rounded-3xl border-2 border-platinum/20 bg-midnight-500/15 p-6 sm:p-8">
				<h4 class="text-lg font-bold text-midnight-400">
					<BounceLink href="https://github.com/slimnate/keeper">Keeper</BounceLink>
				</h4>
				<p
					class="mt-2 text-sm/6 leading-snug text-platinum drop-shadow-md drop-shadow-midnight-900 md:leading-normal"
				>
					Image culling app for photographers.
				</p>
				<div class="mt-4 flex flex-wrap gap-3">
					{#each project_keeperTech as tech}
						<SkillIcon skill={tech.skill} name={tech.name} size={32} />
					{/each}
				</div>
			</div>
			<div class="rounded-3xl border-2 border-platinum/20 bg-midnight-500/15 p-6 sm:p-8">
				<h4 class="text-lg font-bold text-midnight-400">
					<BounceLink href="https://renvintory.netlify.app">Renvintory</BounceLink>
				</h4>
				<p
					class="mt-2 text-sm/6 leading-snug text-platinum drop-shadow-md drop-shadow-midnight-900 md:leading-normal"
				>
					Inventory tracking app for bartenders at KC Renaissance Festival. Track open/close
					inventory, and EOD reports.
				</p>
				<div class="mt-4 flex flex-wrap gap-3">
					{#each project_renvintoryTech as tech}
						<SkillIcon skill={tech.skill} name={tech.name} size={32} />
					{/each}
				</div>
			</div>
			<div class="rounded-3xl border-2 border-platinum/20 bg-midnight-500/15 p-6 sm:p-8">
				<h4 class="text-lg font-bold text-midnight-400">
					<BounceLink href="https://slimnate.net/projects/2021/04/14/snake-tank-humidity-controller"
						>Reptile Humidity Controller</BounceLink
					>
				</h4>
				<p
					class="mt-2 text-sm/6 leading-snug text-platinum drop-shadow-md drop-shadow-midnight-900 md:leading-normal"
				>
					Fully custom PCB, embedded software, and mobile app to monitor and control humidity and
					lighting schedule in reptile enclosures.
				</p>
				<div class="mt-4 flex flex-wrap gap-3">
					{#each project_reptileHumidityTech as tech}
						<SkillIcon skill={tech.skill} name={tech.name} size={32} />
					{/each}
				</div>
			</div>
		</div>

		<!-- Education -->
		<h2
			class="mt-12 text-center text-4xl font-bold text-midnight-400 drop-shadow-md drop-shadow-midnight-900"
		>
			Education
		</h2>
		<div class="mt-8 space-y-4 pb-24">
			<div class="rounded-3xl border-2 border-platinum/20 bg-midnight-500/15 p-6 sm:p-8">
				<h3
					class="text-xl font-bold text-platinum drop-shadow-md drop-shadow-midnight-900 sm:text-2xl"
				>
					Metropolitan Community College - Blue River
				</h3>
				<p class="mt-1 text-lg font-bold text-midnight-400">
					Associate of Applied Science, Computer Science | <span class="text-midnight-400/80"
						>2013</span
					>
				</p>
			</div>
			<div class="rounded-3xl border-2 border-platinum/20 bg-midnight-500/15 p-6 sm:p-8">
				<h3
					class="text-xl font-bold text-platinum drop-shadow-md drop-shadow-midnight-900 sm:text-2xl"
				>
					Summit Technology Academy
				</h3>
				<p class="mt-1 text-sm text-midnight-400">
					Networking Vocational School | <span class="text-midnight-400/80">2012 - 2013</span>
				</p>
			</div>
		</div>
	</div>
</main>
