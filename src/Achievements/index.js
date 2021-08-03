import React from 'react'
import { Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from "@material-ui/core"

import Heading from '../Heading'
import Section from '../Section'
import ExternalLink from '../ExternalLink'

import "./index.css"
import { Brightness7, Description, EmojiObjects, VolumeUp } from '@material-ui/icons'



const Achievements = () => {

    return <Section>
        <Grid container spacing={2} alignItems="flex-start" width="2rem">
            <Grid item xs={12}>
                <Heading text="Things I am Proud of..." align="right" />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography variant="h6">
                    Websphere to Tomcat Migration
                </Typography>
                <Paper>
                    <List>
                        <ListItem alignItems="flex-start">
                            <ListItemIcon><Description /></ListItemIcon>
                            <ListItemText
                                primary="Websphere to Tomcat Migration"
                                secondary={
                                    <>
                                        {`Successfully migearted webservice deployed on Weblogic which in turn saved huge cost associated
                                        with Weblogic interprise server`}
                                    </>
                                }
                            />
                        </ListItem>
                    </List>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography variant="h6">
                    Awards
                </Typography>
                <Paper>
                    <List>
                        <ListItem alignItems="flex-start">
                            <ListItemIcon><EmojiObjects /></ListItemIcon>
                            <ListItemText
                                primary="Pat in the back award"
                                secondary={
                                    <>
                                        {`Awarded for immense contribution in transaction webservice used in TIAA Bank`}
                                    </>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemIcon><Brightness7 /></ListItemIcon>
                            <ListItemText
                                primary="Gold Badges on Stackoverflow"
                                secondary={
                                    <>
                                        {`Received gold badges on stackoveflow for popular questions on webservices and
                                        spring framework`}
                                        <ExternalLink 
                                            url="https://stackoverflow.com/users/7300313/pawan-patil?tab=profile"
                                            tooltip="stackoverflow"
                                        />
                                    </>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemIcon><Description /></ListItemIcon>
                            <ListItemText
                                primary="Key contriutor in Indo European IPR Platform"
                                secondary={
                                    <>
                                        {`Activeley invlved in  Indo European IPR Platform project from requirement 
                                        gathering to successful deployment of project`}
                                    </>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemIcon><Description /></ListItemIcon>
                            <ListItemText
                                primary="Key contributor award in Northern Trust"
                                secondary={
                                    <>
                                        {`Recieved award for contributing in various projects in Northern Trust`}
                                    </>
                                }
                            />
                        </ListItem>
                    </List>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography variant="h6">
                    Interest and Idols
                </Typography>
                <Paper>
                    <List>
                        <ListItem alignItems="flex-start">
                            <ListItemIcon><VolumeUp /></ListItemIcon>
                            <ListItemText
                                primary="Astronomy , Aerospace Engineering , Software"
                                secondary={
                                    <>
                                        {`Albert Einstein,Elon Musk, Steave Jobs, Linus Torvalds`}
                                    </>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemIcon><VolumeUp /></ListItemIcon>
                            <ListItemText
                                primary="Sports,  Arts, Physics"
                                secondary={
                                    <>
                                        {`Christiano Ronaldo, Leonardo da Vinci , Galileo galilei `}
                                    </>
                                }
                            />
                        </ListItem>
                    </List>
                </Paper>
            </Grid>
        </Grid>
    </Section>
}
  
export default Achievements;