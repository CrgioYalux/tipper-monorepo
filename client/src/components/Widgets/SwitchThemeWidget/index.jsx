import './SwitchThemeWidget.css';
import { useTheme } from '../../../providers/ThemeProvider';

export const SwitchThemeWidget = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();

	return (
    <button
		  className={`SwitchThemeWidget ${className}`}
      onClick={() => toggleTheme()}
    >
      {theme}
    </button>
	);
};
