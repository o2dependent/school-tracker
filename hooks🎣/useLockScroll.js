import { useEffect } from 'react';

export default function useLockScroll(isLocked) {
	useEffect(() => {
		if (isLocked) {
			document.querySelector('body').style = `overflow: hidden`;
		} else {
			document.querySelector('body').style = ``;
		}
		return () => {
			document.querySelector('body').style = ``;
		};
	});
}
