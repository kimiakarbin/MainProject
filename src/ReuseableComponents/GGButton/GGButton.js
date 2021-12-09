const GGButton = ({ value, className }) => {
    return (
        <a style={styles.root} className={className}>
            {value}
        </a>
    );
};
const styles = {
    root: {
        color: 'black',
    },
};
export default GGButton;
