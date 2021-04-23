import React, { Component } from 'react'
import { VectorMap } from "react-jvectormap";

 class Map extends Component {
    constructor(props) {
        super(props);
        this.state = { 
             mapData : props.mapData,
        }
        this.handleRegionTip = this.handleRegionTip.bind(this);
     }
     
    handleRegionTip = (e,el, countryCode) => {
        el.html(el.html()+' (Tweets : '+this.state.mapData[countryCode]+')');
    };
    render() {
        return (
            <>
                <div className="mapSvg2">
                    <VectorMap
                        map={"world_mill"}
                        backgroundColor="transparent"
                        zoomOnScroll={true}
                        containerStyle={{
                        width: "100%",
                        height: "70vh",
                        }}
                        onRegionTipShow={this.handleRegionTip}
                        containerClassName="map"
                        
                        regionStyle={{
                        initial: {
                            fill: "#e4e4e4",
                            "fill-opacity": 0.9,
                            stroke: "none",
                            "stroke-width": 0,
                            "stroke-opacity": 0
                        },
                        hover: {
                            "fill-opacity": 0.8,
                            cursor: "pointer"
                        },
                        selected: {
                            fill: "#2938bc" 
                        },
                        selectedHover: {
                        }
                        }}
                        regionsSelectable={false}
                        series={{
                        regions: [
                            {
                            values: this.state.mapData, 
                            scale: ['#C8EEFF', '#0071A4'], //your color game's here
                            legend: {
                                horizontal: true,
                                cssClass: 'jvectormap-legend-bg',
                                title: 'intensity of tweets',
                              },
                            normalizeFunction: "polynomial"
                            }
                        ]}
                    }
                        
                    />
                </div>
            </>
        )
    }
}
export default Map;