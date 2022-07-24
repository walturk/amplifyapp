import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import MyCurrencies from './MyCurrencies';
import TopPerformers from './TopPerformers';
import Widgets1 from './Widgets1';

const DashboardCrypto = () => {
    document.title="Crypto Dashboard | MobiWeb Apps";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>                    
                    <BreadCrumb title="Crypto" pageTitle="Dashboards" />

                    <Row>
                        <Widgets1 />
                    </Row>
                    <Row>
                        <MyCurrencies />
                        <TopPerformers />
                        
                    </Row>
                    
                </Container>
            </div>
        </React.Fragment>
    );
};

export default DashboardCrypto;