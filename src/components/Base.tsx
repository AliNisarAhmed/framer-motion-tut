import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Pizza } from '../types';

interface Props {
	addBase: (base: string) => void;
	pizza: Pizza;
}

const containerVariants = {
	hidden: {
		x: '100vw',
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			delay: 0.5,
		},
	},
};

const nextVariants = {
	hidden: {
		x: '-100vw',
	},
	visible: {
		x: 0,
		transition: {
			type: 'spring',
			stiffness: 150,
		},
	},
};

const Base = ({ addBase, pizza }: Props) => {
	const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

	return (
		<motion.div
			className="base container"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<h3>Step 1: Choose Your Base</h3>
			<ul>
				{bases.map((base) => {
					let spanClass = pizza.base === base ? 'active' : '';
					return (
						<motion.li
							key={base}
							onClick={() => addBase(base)}
							whileHover={{
								scale: 1.3,
								originX: 0,
								color: '#f8e112',
							}}
							transition={{ type: 'spring', stiffness: 300 }}
						>
							<span className={spanClass}>{base}</span>
						</motion.li>
					);
				})}
			</ul>

			{pizza.base && (
				<motion.div
					initial="hidden"
					animate="visible"
					variants={nextVariants}
					className="next"
				>
					<Link to="/toppings">
						<motion.button
							whileHover={{
								scale: 1.2,
								textShadow: '0px 0px 8px rgb(255, 255, 255)',
								boxShadow: '0px 0px 8px rgb(255, 255, 255)',
							}}
						>
							Next
						</motion.button>
					</Link>
				</motion.div>
			)}
		</motion.div>
	);
};

export default Base;
