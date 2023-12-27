import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button } from '@material-ui/core'

const CheckConnection = () => {
  const useStyles = makeStyles((theme) => ({
    '@global': {
      body: {
        backgroundColor: '#E9F0F4',
      },
    },
    background: {
      background: '#E9F0F4',
      marginTop: '134px',
    },
    imgCover: {
      borderRight: '1px solid #C4C4C4',
      height: '460px',
      paddingLeft: '400px',
      paddingTop: '120px',
    },
    internetconnection: {
      paddingLeft: '100px',
    },
    button: {
      backgroundColor: '#FF6652',
      color: '#fff',
      marginTop: '20px',
    },
    Typography: {
      font: 'Nunito',
      fontWeight: 400,
    },
  }))
  const classes = useStyles()
  return (
    <>
      <div className={classes.background}>
        <Grid container>
          <Grid item xs={6} className={classes.imgCover}>
            <img src="src\components\Assets\InternetImg.jpg" alt="" />
          </Grid>
          <Grid item xs={6} className={classes.internetconnection}>
            <Typography
              style={{
                fontSize: 32,
                paddingTop: '119px',
                color: '#1E3D54',
                marginBottom: '10px',
              }}
              className={classes.Typography}
            >
              No Internet Connection...
            </Typography>

            <Typography variant="paragraph" className={classes.Typography}>
              Uh-oh! It seems like you're offline.
            </Typography>
            <Typography className={classes.Typography}>
              Please check your internet connection and try again.
            </Typography>
            <Typography
              style={{
                marginTop: '10px',
                marginBottom: '6px',
                fontWeight: 'bold',
              }}
              className={classes.Typography}
            >
              For Instance :
            </Typography>
            <li style={{ color: '#454545' }}>
              "Check your Wi-Fi or data connection."
            </li>
            <li style={{ color: '#454545' }}>
              "Refresh the page after reconnecting."
            </li>
            <li style={{ color: '#454545' }}>
              "Contact your network administrator for assistance."
            </li>
            <Button
              className={classes.button}
              variant="primary"
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default CheckConnection
