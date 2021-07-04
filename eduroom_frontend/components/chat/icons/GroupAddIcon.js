export default function App(props) {
	return (
		<>
			<svg
				width="20"
				height="11"
				viewBox="0 0 20 11"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style={props.style}
				onClick={props.onClick}
			>
				<path
					d="M6.66667 4.23077H4.16667V1.69231H2.5V4.23077H0V5.92308H2.5V8.46154H4.16667V5.92308H6.66667V4.23077ZM15 5.07692C16.3833 5.07692 17.4917 3.94308 17.4917 2.53846C17.4917 1.13385 16.3833 0 15 0C14.7333 0 14.475 0.0423076 14.2417 0.118461C14.7167 0.803846 14.9917 1.63308 14.9917 2.53846C14.9917 3.44385 14.7083 4.26462 14.2417 4.95846C14.475 5.03462 14.7333 5.07692 15 5.07692ZM10.8333 5.07692C12.2167 5.07692 13.325 3.94308 13.325 2.53846C13.325 1.13385 12.2167 0 10.8333 0C9.45 0 8.33333 1.13385 8.33333 2.53846C8.33333 3.94308 9.45 5.07692 10.8333 5.07692ZM16.35 6.90462C17.0417 7.52231 17.5 8.30923 17.5 9.30769V11H20V9.30769C20 8.00462 18.025 7.20077 16.35 6.90462ZM10.8333 6.76923C9.16667 6.76923 5.83333 7.61539 5.83333 9.30769V11H15.8333V9.30769C15.8333 7.61539 12.5 6.76923 10.8333 6.76923Z"
					fill="#8D8D8D"
				/>
			</svg>
		</>
	)
}
