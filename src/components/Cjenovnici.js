import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const pages = [
    {
        data: 'sava',
        color: 'green',
        naslov: 'sava'
    },
    {
        data: 'gyear',
        color: 'blue',
        naslov: 'good year'
    },
    {
        data: 'dunlop',
        color: 'yellow',
        naslov: 'dunlop'
    },
    {
        data: 'vredestein',
        color: 'red',
        naslov: 'vredestein'
    }
];



export default class Cjenovnici extends Component {

    render() {
        const renderCard = pages.map((data) => {

            const css = `
            
            #img-${data.data} {
                z-index: 997;
                transition: ease-out .2s;
              }
              
              .box:hover {
                // box-shadow: 1px 1px 3px #888;
                // transform: translate(1px, 1px);
                // border-radius: 2em 0 0 0;
              }

              .hov-${data.data}:hover+.changed-cjen-${data.data} #sk-cjen-${data.data} {
                margin-bottom: 3%;
              }
              
              .hov-${data.data}:hover+.changed-cjen-${data.data} #img-${data.data} {
                opacity: .9;
              }

              .hov-${data.data}:hover+.changed-${data.data} #ff-icon-${data.data} {
                transform: translateX(2.6em);
              }
              
              .hov-${data.data} {
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 999;
              }
            
            `

            return (


                <div style={{ marginTop: '-1.5em' }}>
                    <Link to={'/' + data.data}>
                        <div className="col l6" style={{ marginTop: '1.5em' }}>
                            <style>{css}</style>
                            <div className={data.color + ' box'} id={data.data} style={{ padding: '0em', position: 'relative', overflow: 'hidden' }} >
                                <div className={'hov-' + data.data}></div>
                                <div className={'changed-cjen-' + data.data}>
                                    <div className={'skewed-down ' + data.color + ' darken-1'} id={'sk-cjen-' + data.data}></div>
                                    <i
                                        className="material-icons"
                                        id={'ff-icon-' + data.data}
                                        style={{ transition: 'ease-out .2s', color: 'white', zIndex: '999', position: 'absolute', left: '-2.1em', top: '.5em' }}
                                    >fast_forward</i>
                                    <div id={'img-' + data.data}>
                                        <img src={'./img/' + data.data + '_720.jpg'} style={{ width: '100%' }} className="right" alt="" />
                                    </div>
                                    <h5 className="h5-cjen">{data.naslov.toUpperCase()}</h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div >




            )


        })

        return (
            <div className="row" style={{ width: '90%', position: 'relative' }}>
                <br />
                <br />
                <h3 className="center blue-text text-lighten-1">CJENOVNICI</h3>
                {renderCard}
            </div >
        )
    }
}




