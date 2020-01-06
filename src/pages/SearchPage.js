import React from 'react';

import {
  Row,
  Col,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardSubtitle,
  CardBody,
  CardText,
} from 'reactstrap';

import {Table, 
 TableBody, 
 TableCell, 
 TableContainer, 
 TableHead, 
 TableRow, 
}
from '@material-ui/core'; 

import SearchRow from './SearchRow'
import  Page from 'components/Page';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class SearchPage extends React.Component {
  state = {
    carList : [
      {
      "id": 1,
      "total_ranking_score": 52,
      "title": "2016 AUDI A5 S LINE",
      "profile_ranking_names": "No Name Found",
      "model": 2016,
      "sale_status": "Note Found",
      "current_bid": -1,
      "category": "U- Used Unrecorded",
      "odometer": 31177,
      "highlight": "Featured Vechicle",
      "primary_damage": "FRONT END",
      "secondary_damage": "UNDERCARRIAGE",
      "location": "whitburn",
      "tax_days": 19, 
      "mot_days": -60,
      "bids": -1,
      "time_left": 7,
      "lot_number": 25937430,
      "link": "https://www.copart.co.uk/lot/25937430",
      "car_image": "https://www.copart.co.uk/lot/25937430/Photos",
      "body": "5 DOOR HATCHBACK",
      "transmission": "Not Found",
      "drive": "Not Found",
      "bid_status": "Not Found",
      "sale_location": "https://www.copart.co.uk/locations/whitburn-gb-412",
      "sale_date": "Mon. Jan 13, 2020",
      "color": "BLUE",
      "engine": "1968 cc",
      "fuel": "DISEL",
      "vrn": "SG16HT",
      "vin": "WAUZZZ8T6GA044263",
      "key": "YES",
      "tax": "18 December 2019",
      "mot": "6 March 2020",
      "bid_increment": "(£70 GBP Bid Increment)",
      "car_type": "U"
      }]
    
  };

  render() {
    return (
      <Page
        className="SearchPage"
        title="Search"
        breadcrumbs={[{ name: 'search', active: true }]}
      >
          <TableContainer style={{width: 'inherit', margin: '0'}}>
            
              <Table striped bordered hover size="small" stickyHeader="true">
                <TableHead>
                    <TableCell>Total Ranking Score</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Profile Name</TableCell>
                    <TableCell>Sale Status</TableCell>
                    <TableCell>Model</TableCell>
                    <TableCell>Current Bid</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Odometer</TableCell>
                    <TableCell>Highlight</TableCell>
                    <TableCell>Primary Damage</TableCell>
                    <TableCell>Secondary Damage</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Tax Days</TableCell>
                    <TableCell>MOT Days</TableCell>
                    <TableCell>Bids</TableCell>
                    <TableCell>Time Left</TableCell>
                    <TableCell>VRN</TableCell>
                </TableHead>
                {/* <TableBody>
                  {Object.keys(this.state.carList).map(key => {
                    const row = this.state.carList[key];
                    return <SearchRow key={key} id={key} {...row} />
                  })}
                </TableBody> */}
              </Table>
            </TableContainer>
        
      </Page>
    );
  }
}

export default SearchPage;
