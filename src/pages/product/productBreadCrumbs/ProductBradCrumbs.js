import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { ReactComponent as BreadCrumbsArrow } from '../../../assets/img/Product/breadcrubsarrow.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        color: '#C4C4C4',
        fontSize: '15px',
        fontFamily: 'IBM Plex Sans',
    },
}));

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Breadcrumbs classes={{ root: classes.root, }} separator={<BreadCrumbsArrow />} aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                    Главная
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                    Гидроциклы
                </Link>
                    <Typography classes={{ root: classes.root, }}>
                        Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic
                    </Typography>
                </Breadcrumbs>
        </div>
    );
}