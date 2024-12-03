import React from 'react';
import { Card } from 'antd';

import { OfferProvider } from '../../context/OfferContext';
import { RequestProvider } from '../../context/RequestContext';
import { VolunteerProvider } from '../../context/VolunteerContext';
import { CommunityProvider } from '../../context/CommunityContext';

import OffersCarusel from '../Carusels/Offer';
import RequestsCarusel from '../Carusels/Request';
import VolunteersCarusel from '../Carusels/Volunteer';
import CommunitiesCarusel from '../Carusels/Community';

const wrapperStyle = {
    marginBottom: 16,
}

const HomeContentCarusels = () => {

    return (
        <>
            <Card
                title="Help Requests"
                className="gradientBg odd"
                size="small"
                align="center"
                style={wrapperStyle}
            >
                <RequestProvider>
                    <RequestsCarusel />
                </RequestProvider>
            </Card>

            <Card
                title="Help Offers"
                className="gradientBg even"
                size="small"
                align="center"
                style={wrapperStyle}
            >
                <OfferProvider>
                    <OffersCarusel />
                </OfferProvider>
            </Card>

            <Card
                title="Volunteers"
                className="gradientBg odd"
                size="small"
                align="center"
                style={wrapperStyle}
            >
                <VolunteerProvider>
                    <VolunteersCarusel />
                </VolunteerProvider>
            </Card>

            <Card
                title="Communities"
                className="gradientBg even"
                size="small"
                align="center"
                style={wrapperStyle}
            >
                <CommunityProvider>
                    <CommunitiesCarusel />
                </CommunityProvider>
            </Card>
        </>
    );
};

export default HomeContentCarusels;
