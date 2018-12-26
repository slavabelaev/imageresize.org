const styles = theme => ({
    root: {
        backgroundImage: 
        `url(${require('../../../assets/images/background-left.jpg')}),
            url(${require('../../../assets/images/background-right.jpg')})`,
        backgroundPosition: 
        `top 100px left,
            center right`,
        backgroundRepeat: 'no-repeat'
    }
});

export default styles;