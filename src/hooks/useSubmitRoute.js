import { useHistory } from 'react-router';

const useSubmitRoute = () => {
	const history = useHistory();

	const handleSubmit = (e, url) => {
		e.preventDefault();
		history.push(url);
	};
	return { handleSubmit };
};

export default useSubmitRoute;
