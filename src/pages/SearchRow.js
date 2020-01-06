import React, { Component } from 'react';
import { Button, Badge } from 'reactstrap';
import {FaTrashAlt} from 'react-icons/fa'
import {MdModeEdit} from 'react-icons/md'
import {Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
 }
 from '@material-ui/core'; 


class SearchRow extends Component {
  edit = () => {
    this.props.edit(this.props.id,this.props.name,this.props.address,this.props.contact,this.props.email,this.props.NTN,this.props.GST)
  }
  constructor( props ){
    super();
    this.state = { ...props,
      green : '#22ee33',
      orange: '#FFA500',
      red : '#E62020',
  
      primary_damageColor : '',
      secondary_damageColor : '',
      modelColor :'',
      sale_statusColor: '',
      current_bidColor : '',
      categoryColor :'',
      odometerColor : '',
      highlightColor : '',
      locationColor : '',
      tax_daysColor : '',
      mot_daysColor : '',
      bidsColor : '',
      time_leftColor : '',
    }
}
  save = (event, values) => {
    this.setState(prevState => ({
      editing: !prevState.editing,
    }));

  }
  componentWillReceiveProps = ( nextProps ) =>{
    this.setState( { ...nextProps } );

  }
  componentDidMount =() => {
    this.checkPrimaryDamage();
    this.checkSecondaryDamage();
    this.checkModel();
    this.checkSalesStatus();
    this.checkBids();
    this.checkCategory();
    this.checkCurrentBid();
    this.checkHighlight();
    this.checkLocation();
    this.checkMOTDays();
    this.checkOdometer();
    this.checkTaxDays();
    this.checkTimeLeft();
  }

  checkPrimaryDamage=() => {
    let damage = this.state.primary_damage;
    let {primary_damageColor , green, orange, red} = this.state
    if (damage.includes("NORMAL WEAR") || damage.includes("UNKNOWN") || damage.includes("MISSING") || damage.includes("ALTERED VIN") || damage.includes("REPLACED VIN") || damage.includes("MINOR DENTS") || damage.includes("SCRATCHES"))
     primary_damageColor = green;
    if(damage.includes("VANDALISM") ||damage.includes("PREVIOUS REPAIR") ||damage.includes("INCOMPLETE REPAIR") ||damage.includes("PARTIAL REPAIR") ||damage.includes("REJECT REPAIR") ||damage.includes("UNDERCARRIAGE") ||damage.includes("HAIL") ||damage.includes("CHIPPED STONE"))
    primary_damageColor = orange;
    if(damage.includes("TOP") ||damage.includes("ROOF") ||damage.includes("REAR END") ||damage.includes("SIDE") ||damage.includes("FRONT END") ||damage.includes("ALL OVER") ||damage.includes("STRIPPED"))
    primary_damageColor = red;
    this.setState({primary_damageColor})
  }

  checkSecondaryDamage=() => {
    let damage = this.state.secondary_damage;
    let {secondary_damageColor , green, orange, red} = this.state
    if (damage.includes("NORMAL WEAR") || damage.includes("UNKNOWN") || damage.includes("MISSING") || damage.includes("ALTERED VIN") || damage.includes("REPLACED VIN") || damage.includes("MINOR DENTS") || damage.includes("SCRATCHES"))
     secondary_damageColor = green;
    if(damage.includes("VANDALISM") ||damage.includes("PREVIOUS REPAIR") ||damage.includes("INCOMPLETE REPAIR") ||damage.includes("PARTIAL REPAIR") ||damage.includes("REJECT REPAIR") ||damage.includes("UNDERCARRIAGE") ||damage.includes("HAIL") ||damage.includes("CHIPPED STONE"))
    secondary_damageColor = orange;
    if(damage.includes("TOP") ||damage.includes("ROOF") ||damage.includes("REAR END") ||damage.includes("SIDE") ||damage.includes("FRONT END") ||damage.includes("ALL OVER") ||damage.includes("STRIPPED"))
    secondary_damageColor = red;
    this.setState({secondary_damageColor})
  }

  checkModel = () => {
    let {model, modelColor, green, orange, red} = this.state;
    model = parseInt(model)
    model > 2014 ? modelColor = green 
    :
    model > 2009 ? modelColor = orange
    :
    modelColor = red

    this.setState({modelColor})
  }

  checkSalesStatus = () => {
    let {sale_status, sale_statusColor, green, orange, red} = this.state;
    sale_status = sale_status.toString().toLowerCase();

    if(sale_status.includes("pure sale"))
    sale_statusColor = green
    if(sale_status.includes("on approval"))
    sale_statusColor = orange
    if(sale_status.includes("minmum bid"))
    sale_statusColor = red
    this.setState({sale_statusColor})
  }
  checkCurrentBid = () => {
    let {current_bidColor, current_bid, green, orange, red} = this.state;
    current_bid = parseInt(current_bid);
    current_bid < 301 ? 
    current_bidColor = green
    :
    current_bid < 501 ?
    current_bidColor = orange
    :
    current_bidColor = red
    this.setState({current_bidColor})
  }
  checkCategory = () => {
    let {category, categoryColor, green, orange, red} = this.state;
    if(category.toLowerCase().substring(0,1) == "x" || category.toLowerCase().substring(0,1) == "u")
    categoryColor = green;
    if(category.toLowerCase().substring(0,1) == "n" || category.toLowerCase().substring(0,1) == "d" || category.toLowerCase().substring(0,1) == "s")
    categoryColor = orange;

    this.setState({categoryColor})
  }
  checkOdometer = () => {
    let {odometer, odometerColor, green, orange, red} = this.state;
    odometer = parseInt(odometer);
    odometer < 100001 ? 
    odometerColor = green
    :
    odometer < 175001 ?
    odometerColor = orange
    :
    odometerColor = red
    this.setState({odometerColor})
  }
  checkVanOdometer = () => {
    let {odometer, odometerColor, green, orange, red} = this.state;
    odometer = parseInt(odometer);
    odometer < 150001 ? 
    odometerColor = green
    :
    odometer < 300001 ?
    odometerColor = orange
    :
    odometerColor = red
    this.setState({odometerColor})
  }
  checkHighlight = () => {
    let {highlight, highlightColor, green, orange, red} = this.state;
    highlight = highlight.toLowerCase()
    if(highlight.includes("run and drive") || highlight.includes("featured"))
    highlightColor = green;
    if(highlight.includes("engine start")) 
    highlightColor = orange;
    if(highlight.includes("enhanced"))
    highlightColor = red;
    this.setState({highlightColor})
  }
  checkLocation = () => {
    let {location, locationColor, green, orange, red} = this.state;
    if(location.toLowerCase() == "rochford" || location.toLowerCase() == "sandy" || location.toLowerCase() == "newbury" || location.toLowerCase() == "colchester" || location.toLowerCase() == "sandwich" || location.toLowerCase() == "wisbech")
    locationColor = green;
    if(location.toLowerCase() == "westbury" || location.toLowerCase() == "bristol" || location.toLowerCase() == "wolverhampton" || location.toLowerCase() == "sandtoft" || location.toLowerCase() == "york")
    locationColor = orange;
    if(location.toLowerCase() == "chester" || location.toLowerCase() == "peterlee" || location.toLowerCase() == "whitburn" || location.toLowerCase() == "belfast")
    locationColor = red;
    this.setState({locationColor})

  }
  checkTaxDays = () => {
    let {tax_days, tax_daysColor, green, orange, red} = this.state;
    tax_days = parseInt(tax_days);
    tax_days > 91 ? 
    tax_daysColor = green
    :
    tax_days > 31 ?
    tax_daysColor = orange
    :
    tax_daysColor = red
    this.setState({tax_daysColor})
  }
  checkMOTDays = () => {
    let {mot_days, mot_daysColor, green, orange, red} = this.state;
    mot_days = parseInt(mot_days);
    mot_days > 91 ? 
    mot_daysColor = green
    :
    mot_days > 31 ?
    mot_daysColor = orange
    :
    mot_daysColor = red
    this.setState({mot_daysColor})
  }
  checkBids = () => {
    let {bids,bidsColor, green, orange, red} = this.state;
    bids = parseInt(bids);
    bids < 301 ? 
    bidsColor = green
    :
    bids < 501 ?
    bidsColor = orange
    :
    bidsColor = red
    this.setState({bidsColor})
  }
  checkTimeLeft = () => {
    let {time_left, time_leftColor, green, orange, red} = this.state;
    time_left = parseInt(time_left);
    time_left < 9 ? 
    time_leftColor = green
    :
    time_left < 14 ?
    time_leftColor = orange
    :
    time_leftColor = red
    this.setState({time_leftColor})
  }
  


  render() {
    return (
      <TableRow>
        <TableCell>{this.state.total_ranking_score}</TableCell>
        <TableCell>{this.state.title}</TableCell>
        <TableCell>{this.state.profile_ranking_names}</TableCell>
        <TableCell style={{backgroundColor: `${this.state.sale_statusColor}`}}>{this.state.sale_status}</TableCell>
        <TableCell style={{backgroundColor: `${this.state.modelColor}`}}>{this.state.model}</TableCell>
        <TableCell style={{backgroundColor: `${this.state.current_bidColor}`}}>{this.state.current_bid}</TableCell>
        <TableCell style={{backgroundColor: `${this.state.categoryColor}`}}>{this.state.category}</TableCell>
        <TableCell style={{backgroundColor: `${this.state.odometerColor}`}}>{this.state.odometer}</TableCell>
        <TableCell style={{backgroundColor: `${this.state.highlightColor}`}}>{this.state.highlight}</TableCell>
        <TableCell style={{backgroundColor: `${this.state.primary_damageColor}`}}>{this.state.primary_damage}</TableCell>
        <TableCell style={{backgroundColor: `${this.state.secondary_damageColor}`}}>{this.state.secondary_damage}</TableCell>
        <TableCell style={{backgroundColor: `${this.state.locationColor}`}}>{this.state.location}</TableCell>
        <TableCell style={{backgroundColor: `${this.state.tax_daysColor}`}}>{this.state.tax_days}</TableCell>
        <TableCell style={{backgroundColor: `${this.state.mot_daysColor}`}}>{this.state.mot_days}</TableCell>
        <TableCell style={{backgroundColor: `${this.state.bidsColor}`}}>{this.state.bids}</TableCell>
        <TableCell style={{backgroundColor: `${this.state.time_leftColor}`}}>{this.state.time_left}</TableCell>
        <TableCell>{this.state.vrn}</TableCell>

      </TableRow>
    )
  }
}

export default SearchRow;