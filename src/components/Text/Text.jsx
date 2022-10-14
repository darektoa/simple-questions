const Text = (props) => {
    const { children, value, ...attrs} = props;

    return (
        <p {...attrs}>
            { children || value }
        </p>
    );
};

export default Text;