export type Language = 'es' | 'en';
export type Palette = 'indigo' | 'blush' | 'elite';
export type Portrait = 'classic' | 'anime' | 'realistic';

export const profile = {
	name: 'María Gabriela Marquina Graterol',
	canonicalName: 'María Gabriela Marquina Graterol',
	displayName: 'María Marquina',
	firstName: 'María',
	contact: {
		email: 'maga.marqg@gmail.com',
		linkedin: 'https://www.linkedin.com/in/maríagabriela-marquina-2bb380159',
	},
	avatars: {
		indigo: {
			classic: '/avatars/magamarq-indigo.webp',
			anime: '/avatars/magamarq-indigo-anime.webp',
			realistic: '/avatars/magamarq-indigo-realistic.webp',
		},
		blush: {
			classic: '/avatars/magamarq-blush.webp',
			anime: '/avatars/magamarq-blush-anime.webp',
			realistic: '/avatars/magamarq-blush-realistic.webp',
		},
		elite: {
			classic: '/avatars/magamarq-elite.webp',
			anime: '/avatars/magamarq-elite-anime.webp',
			realistic: '/avatars/magamarq-elite-realistic.webp',
		},
	},
	languages: {
		es: {
			locale: 'es-AR',
			title: 'Éxito del Cliente y Operaciones Comerciales',
			hero: 'Del rigor documental y financiero | a la coordinación humana',
			heroSupport:
				'Más de cinco años administrando facturación, cuentas por cobrar, conciliaciones y expedientes comerciales en Venezuela, Chile y Argentina. Estudiante de la Licenciatura en Psicología en la Universidad de Buenos Aires (UBA).',
			availability: 'Disponible para oportunidades remotas y presenciales · Buenos Aires',
			primaryCta: 'Escribirme',
			secondaryCta: 'Ver experiencia',
			cvCta: 'Descargar CV',
			journeyBar: {
				ariaLabel: 'Trayectoria profesional por etapas',
				pointA: 'Etapa inicial · Base jurídica y documental',
				pointB: 'Etapa actual · Operaciones y Psicología',
				steps: [
					{ id: 'foundation', code: '01 · 2014–2020', city: 'Caracas', label: 'Base legal y documental' },
					{ id: 'operations', code: '02 · 2020–2023', city: 'Caracas → Santiago', label: 'Facturación y conciliaciones' },
					{ id: 'next-chapter', code: '03 · 2023–Hoy', city: 'Buenos Aires', label: 'Coordinación y Psicología' },
					{ id: 'contact', code: '04 · Contacto', city: 'Remoto / Baires', label: 'Canales y CV' },
				],
			},
			nav: {
				profile: 'Inicio',
				foundation: '01 · Base',
				operations: '02 · Operaciones',
				nextChapter: '03 · Psicología',
				tools: 'Sistemas',
				contact: 'Contacto',
			},
			chapters: {
				foundation: {
					step: '01 · Etapa inicial (2014–2020 · Caracas)',
					title: 'Formación jurídica, gestión judicial y cumplimiento documental',
					lead:
						'Egresada del liceo como Técnico Medio en Procesamiento de Datos, estudié Ciencias Jurídicas en la Universidad Central de Venezuela (UCV) mientras trabajaba en el Tribunal Trigésimo de Municipio de Caracas y luego en el archivo de cumplimiento de Corporación Total Pago Plus. Durante seis años gestioné expedientes judiciales, contratos mercantiles y legajos bancarios sujetos a auditoría.',
					takeawayLabel: 'Competencias desarrolladas en esta etapa',
					takeaway: 'Interpretación normativa, procesamiento estructurado de datos, trazabilidad de expedientes y verificación de requisitos legales antes del alta comercial o bancaria.',
					milestones: [
						{
							period: 'Egresada',
							location: 'Caracas, Venezuela',
							company: 'Liceo · Educación media técnica',
							role: 'Técnico Medio en Procesamiento de Datos',
							body: 'Egresada del liceo con título de Técnico Medio en Procesamiento de Datos; base técnica previa a los estudios universitarios y al trabajo en tribunales.',
							tag: 'Egreso de liceo',
						},
						{
							period: '2014–2019',
							location: 'Caracas, Venezuela',
							company: 'Universidad Central de Venezuela (UCV)',
							role: 'Formación Universitaria en Derecho / Ciencias Jurídicas',
							body: 'Redacción jurídica, interpretación de normativa civil y mercantil, análisis de contratos y procedimientos administrativos.',
							tag: 'Formación universitaria',
						},
						{
							period: 'Abr 2014–Feb 2018',
							location: 'Caracas, Venezuela',
							company: 'Tribunal Trigésimo de Municipio Ordinario y Ejecutor de Medidas',
							role: 'Asistente Legal y Administrativa',
							body: 'Sustanciación, foliatura y archivo cronológico de causas civiles y mercantiles; redacción de oficios y atención a abogados y litigantes en mesa de entradas.',
							tag: 'Gestión judicial',
						},
						{
							period: 'Feb 2019–Jul 2020',
							location: 'Caracas, Venezuela',
							company: 'Corporación Total Pago Plus',
							role: 'Analista de Archivo y Cumplimiento Documental',
							body: 'Custodia de expedientes comerciales y bancarios, control de matrices de requisitos KYC/AML y preparación de legajos para auditorías internas y de bancos aliados.',
							tag: 'Cumplimiento y auditoría',
						},
					],
				},
				operations: {
					step: '02 · Operación financiera y comercial (2020–2023 · Caracas → Santiago)',
					title: 'Facturación ERP, cuentas por cobrar y conciliación multimoneda',
					lead:
						'Entre 2020 y 2023 administré ciclos completos de facturación fiscal en Profit Plus, cobranza de cartera activa y en mora, liquidación de comisiones, redes de terminales POS y conciliaciones diarias contra bancos y pasarelas de pago en empresas de tecnología financiera y comercio electrónico.',
					takeawayLabel: 'Alcance operativo',
					takeaway: 'Ejecución del ciclo completo de cobro, cruce diario de extractos bancarios y coordinación operativa entre ventas, finanzas, bancos y soporte.',
					milestones: [
						{
							period: 'Jul 2020–Oct 2022',
							location: 'Caracas, Venezuela',
							company: 'Disglobal',
							role: 'Facturación y Contratos → Cobranzas y Cartera → Operaciones de Ventas',
							body: 'Desempeño consecutivo en tres cargos: emisión masiva de facturas en Profit Plus y contratos mercantiles; recuperación de cartera en mora y retención de comercios afiliados; gestión bancaria para apertura de cuentas recaudadoras y despacho de terminales POS.',
							tag: '3 cargos consecutivos',
						},
						{
							period: 'Oct 2022–May 2023',
							location: 'Caracas, Venezuela',
							company: 'Vepagos',
							role: 'Analista de Administración y Cuentas por Cobrar',
							body: 'Conciliación de cobros por venta de equipos POS y membresías, validación documental de comercios corporativos, facturación fiscal y liquidación mensual de comisiones a aliados comerciales.',
							tag: 'Fintech y pasarelas POS',
						},
						{
							period: 'May 2023–Oct 2023',
							location: 'Santiago, Chile · Híbrido / remoto',
							company: 'Distribuidora Jamila',
							role: 'Analista Administrativa y de Operaciones',
							body: 'Procesamiento de órdenes de compra de comercio electrónico, conciliación diaria de transferencias y pasarelas digitales, emisión de facturación electrónica, cierres de caja y soporte a clientes por canales digitales.',
							tag: 'Operación regional remota',
						},
					],
				},
				nextChapter: {
					step: '03 · Etapa actual (2023–Presente · Buenos Aires)',
					title: 'Coordinación operativa en vivo y Licenciatura en Psicología',
					lead:
						'Desde noviembre de 2023 coordino la operación diaria, el flujo de caja y la atención al cliente en !OMG Spa en Buenos Aires, en paralelo con mis estudios en la Licenciatura en Psicología en la Universidad de Buenos Aires (UBA).',
					bridgeLabel: 'Cómo se conectan facturación, Psicología y operación diaria',
					bridgeFrom: 'Facturación y conciliaciones',
					bridgeTo: 'Psicología y atención al cliente',
					bridgeResult: 'Coordinación operativa diaria',
					milestones: [
						{
							period: 'Nov 2023–Presente',
							location: 'Buenos Aires, Argentina',
							company: '!OMG Spa',
							role: 'Coordinadora de Atención al Cliente y Gestión Operativa',
							body: 'Coordinación de agendas de turnos, cobros diarios con tarjetas, transferencias y efectivo, arqueo de cierre de caja, resolución de reclamos en recepción y control de inventario de insumos.',
							tag: 'Operación presencial y caja',
						},
						{
							period: '2024–En curso',
							location: 'Buenos Aires, Argentina',
							company: 'Universidad de Buenos Aires (UBA)',
							role: 'Licenciatura en Psicología',
							body: 'Formación universitaria en procesos psicológicos, comunicación interpersonal, escucha activa y mediación de conflictos en grupos de trabajo y atención al público.',
							tag: 'Formación universitaria en curso',
						},
					],
				},
			},
			sections: {
				strengths: {
					title: 'Áreas de práctica operativa y administrativa',
					body:
						'Cuatro funciones operativas desarrolladas en juzgados, procesadoras de pago, distribuidoras comerciales y servicios presenciales.',
				},
				tools: {
					title: 'Software financiero, ERP, CRM y gestión documental',
					body:
						'Herramientas utilizadas para facturación fiscal, conciliación de cuentas, seguimiento de casos y coordinación de equipos.',
				},
				contact: {
					title: 'Contacto directo y descarga de CV',
					body:
						'Disponible para puestos remotos o presenciales en Buenos Aires en operaciones comerciales, facturación, cuentas por cobrar y Customer Success.',
				},
			},
			strengths: [
				{
					label: 'Facturación y cobranzas',
					body: 'Ciclos de facturación fiscal, cuentas por cobrar (A/R), notas de crédito y débito, y seguimiento preventivo y correctivo de cartera.',
				},
				{
					label: 'Conciliaciones',
					body: 'Cruce diario de pagos, extractos bancarios, terminales POS y pasarelas multimoneda con respaldos contables y arqueos de cierre.',
				},
				{
					label: 'Operaciones y clientes',
					body: 'Alta documental de clientes corporativos, seguimiento de órdenes comerciales, resolución de incidencias y soporte B2B/B2C.',
				},
				{
					label: 'Documentación y cumplimiento',
					body: 'Custodia de expedientes físicos y digitales, contratos mercantiles, matrices de requisitos normativos y legajos para auditorías.',
				},
			],
			tools: [
				{
					label: 'Datos y finanzas',
					items: ['Microsoft Excel', 'Profit Plus ERP', 'Looker Studio', 'CRM y dashboards', 'Airtable'],
				},
				{
					label: 'Colaboración y productividad',
					items: ['Microsoft 365', 'Google Workspace', 'Notion', 'Slack', 'Trello', 'Asana', 'Zoom'],
				},
				{
					label: 'Éxito del cliente e IA',
					items: ['HubSpot CRM', 'Zendesk', 'Calendly', 'Zapier', 'ChatGPT', 'Gemini', 'Microsoft Copilot'],
				},
			],
			contactLabels: {
				email: 'Escribirme por email',
				linkedin: 'Ver perfil de LinkedIn',
				esCv: 'CV en español',
				enCv: 'CV en inglés',
			},
			theme: {
				dialogLabel: 'Probar looks',
				paletteGroup: 'Paleta',
				portraitGroup: 'Retrato',
				caption: 'Prueba un look: elige paleta y retrato.',
				tryOn: 'Prueba un look',
				activeLook: 'Look activo',
				palettes: {
					indigo: 'Indigo',
					blush: 'Blush',
					elite: 'Elite',
				},
				portraits: {
					classic: 'Clásico',
					anime: 'Anime',
					realistic: 'Realista',
				},
			},
		},
		en: {
			locale: 'en-US',
			title: 'Customer Success & Business Operations',
			hero: 'From legal & financial rigor | to human-centered coordination',
			heroSupport:
				'Over five years managing billing, accounts receivable, reconciliations, and commercial records across Venezuela, Chile, and Argentina. Currently pursuing a Bachelor’s degree in Psychology at the University of Buenos Aires (UBA).',
			availability: 'Open to remote and on-site opportunities · Buenos Aires',
			primaryCta: 'Email me',
			secondaryCta: 'View experience',
			cvCta: 'Download CV',
			journeyBar: {
				ariaLabel: 'Professional work history by stage',
				pointA: 'Early stage · Legal & document control',
				pointB: 'Current stage · Operations & Psychology',
				steps: [
					{ id: 'foundation', code: '01 · 2014–2020', city: 'Caracas', label: 'Legal & document control' },
					{ id: 'operations', code: '02 · 2020–2023', city: 'Caracas → Santiago', label: 'Billing & reconciliations' },
					{ id: 'next-chapter', code: '03 · 2023–Today', city: 'Buenos Aires', label: 'Coordination & Psychology' },
					{ id: 'contact', code: '04 · Contact', city: 'Remote / Baires', label: 'Channels & CV' },
				],
			},
			nav: {
				profile: 'Start',
				foundation: '01 · Foundation',
				operations: '02 · Operations',
				nextChapter: '03 · Psychology',
				tools: 'Systems',
				contact: 'Contact',
			},
			chapters: {
				foundation: {
					step: '01 · Early stage (2014–2020 · Caracas)',
					title: 'Legal studies, court records, and document compliance',
					lead:
						'After graduating from secondary technical school (liceo) as a Mid-Level Technician in Data Processing, I studied Law at the Central University of Venezuela (UCV) while working at the 30th Municipal Court of Caracas and later in the compliance records department at Corporación Total Pago Plus. Across six years, I indexed judicial case files, reviewed commercial contracts, and prepared banking dossiers for regulatory audits.',
					takeawayLabel: 'Skills developed in this stage',
					takeaway: 'Regulatory interpretation, structured data processing, file traceability, and verification of legal requirements prior to merchant or bank account approval.',
					milestones: [
						{
							period: 'Graduated',
							location: 'Caracas, Venezuela',
							company: 'Liceo · Technical secondary education',
							role: 'Mid-Level Technician in Data Processing (Técnico Medio en Procesamiento de Datos)',
							body: 'Graduated from liceo / secondary technical school as a Mid-Level Technician in Data Processing; technical foundation before university studies and court work.',
							tag: 'Liceo graduation',
						},
						{
							period: '2014–2019',
							location: 'Caracas, Venezuela',
							company: 'Central University of Venezuela (UCV)',
							role: 'University Legal Studies / Law',
							body: 'Legal drafting, civil and commercial statutory interpretation, and review of commercial contracts and administrative procedures.',
							tag: 'University studies',
						},
						{
							period: 'Apr 2014–Feb 2018',
							location: 'Caracas, Venezuela',
							company: '30th Municipal Court of Caracas',
							role: 'Legal & Administrative Assistant',
							body: 'Processed, numbered, and archived civil and commercial case files; drafted court notices and assisted attorneys and litigants at the filing desk.',
							tag: 'Judicial administration',
						},
						{
							period: 'Feb 2019–Jul 2020',
							location: 'Caracas, Venezuela',
							company: 'Corporación Total Pago Plus',
							role: 'Document Compliance & Records Analyst',
							body: 'Maintained central commercial and banking dossiers, verified merchant KYC/AML requirement matrices, and prepared files for internal and partner-bank audits.',
							tag: 'Compliance & audit readiness',
						},
					],
				},
				operations: {
					step: '02 · Financial & commercial operations (2020–2023 · Caracas → Santiago)',
					title: 'ERP billing, accounts receivable, and multi-currency reconciliation',
					lead:
						'From 2020 to 2023, I managed tax invoicing in Profit Plus ERP, active and past-due accounts receivable, partner commission settlements, POS terminal deployments, and daily bank and payment gateway reconciliations for fintech and regional e-commerce companies.',
					takeawayLabel: 'Operational scope',
					takeaway: 'End-to-end invoicing and collection cycles, daily bank statement matching, and cross-team coordination across sales, finance, banks, and support.',
					milestones: [
						{
							period: 'Jul 2020–Oct 2022',
							location: 'Caracas, Venezuela',
							company: 'Disglobal',
							role: 'Billing & Contracts → Collections & Portfolio → Sales Operations Executive',
							body: 'Held three consecutive roles: batch invoicing in Profit Plus ERP and merchant contract preparation; past-due fee recovery and merchant retention; bank coordination for settlement accounts and POS terminal dispatch.',
							tag: '3 consecutive roles',
						},
						{
							period: 'Oct 2022–May 2023',
							location: 'Caracas, Venezuela',
							company: 'Vepagos',
							role: 'Administrative & Accounts Receivable Analyst',
							body: 'Reconciled POS hardware sales and merchant subscriptions, verified corporate onboarding documentation, issued tax invoices, and calculated monthly partner commissions.',
							tag: 'Fintech & POS gateways',
						},
						{
							period: 'May 2023–Oct 2023',
							location: 'Santiago, Chile · Hybrid / remote',
							company: 'Distribuidora Jamila',
							role: 'Administrative & Operations Analyst',
							body: 'Processed e-commerce purchase orders, reconciled daily bank transfers and digital payment gateways, issued electronic invoices, balanced daily cash closeouts, and handled online customer inquiries.',
							tag: 'Remote regional operations',
						},
					],
				},
				nextChapter: {
					step: '03 · Current stage (2023–Present · Buenos Aires)',
					title: 'Live operations coordination and Psychology degree at UBA',
					lead:
						'Since November 2023, I have coordinated daily scheduling, multi-method cash closeouts, and front-desk client care at !OMG Spa in Buenos Aires while completing my Bachelor’s degree in Psychology at the University of Buenos Aires (UBA).',
					bridgeLabel: 'How billing, Psychology, and daily operations connect',
					bridgeFrom: 'Billing & reconciliations',
					bridgeTo: 'Psychology & client care',
					bridgeResult: 'Daily operations coordination',
					milestones: [
						{
							period: 'Nov 2023–Present',
							location: 'Buenos Aires, Argentina',
							company: '!OMG Spa',
							role: 'Client Care & Operations Coordinator',
							body: 'Coordinates daily appointment schedules, multi-method POS payments and cash closeouts, front-desk issue resolution, client follow-up, and consumable supply inventory.',
							tag: 'On-site operations & cash control',
						},
						{
							period: '2024–In progress',
							location: 'Buenos Aires, Argentina',
							company: 'University of Buenos Aires (UBA)',
							role: "Bachelor's Degree in Psychology",
							body: 'Undergraduate coursework in psychological processes, interpersonal communication, active listening, and conflict mediation in workplace and public-facing settings.',
							tag: 'Undergraduate degree in progress',
						},
					],
				},
			},
			sections: {
				strengths: {
					title: 'Operational and administrative areas',
					body:
						'Four operational functions practiced across municipal courts, payment processors, wholesale distributors, and on-site client services.',
				},
				tools: {
					title: 'Financial software, ERP, CRM, and document management',
					body:
						'Platforms used for tax invoicing, account reconciliation, ticket tracking, and team coordination.',
				},
				contact: {
					title: 'Direct contact and CV downloads',
					body:
						'Available for remote or Buenos Aires on-site roles in business operations, billing, accounts receivable, and Customer Success.',
				},
			},
			strengths: [
				{
					label: 'Billing and collections',
					body: 'Tax-compliant billing cycles, accounts receivable (A/R), credit and debit notes, and preventive and past-due portfolio follow-up.',
				},
				{
					label: 'Reconciliations',
					body: 'Daily payment, bank statement, POS terminal, and multi-currency gateway matching with accounting records and register closeouts.',
				},
				{
					label: 'Operations and clients',
					body: 'Corporate client document onboarding, purchase order tracking, issue resolution, and B2B/B2C client support.',
				},
				{
					label: 'Documentation and compliance',
					body: 'Physical and digital commercial dossiers, contracts, regulatory requirement matrices, and audit files.',
				},
			],
			tools: [
				{
					label: 'Data & Finance',
					items: ['Microsoft Excel', 'Profit Plus ERP', 'Looker Studio', 'CRM & dashboards', 'Airtable'],
				},
				{
					label: 'Collaboration & Productivity',
					items: ['Microsoft 365', 'Google Workspace', 'Notion', 'Slack', 'Trello', 'Asana', 'Zoom'],
				},
				{
					label: 'Customer Success & AI',
					items: ['HubSpot CRM', 'Zendesk', 'Calendly', 'Zapier', 'ChatGPT', 'Gemini', 'Microsoft Copilot'],
				},
			],
			contactLabels: {
				email: 'Email me',
				linkedin: 'View LinkedIn profile',
				esCv: 'Spanish CV',
				enCv: 'English CV',
			},
			theme: {
				dialogLabel: 'Try on looks',
				paletteGroup: 'Palette',
				portraitGroup: 'Portrait',
				caption: 'Try a look: pick a palette and portrait.',
				tryOn: 'Try a look',
				activeLook: 'Active look',
				palettes: {
					indigo: 'Indigo',
					blush: 'Blush',
					elite: 'Elite',
				},
				portraits: {
					classic: 'Classic',
					anime: 'Anime',
					realistic: 'Realistic',
				},
			},
		},
	},
} as const;
