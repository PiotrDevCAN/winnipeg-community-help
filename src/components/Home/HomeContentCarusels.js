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

const wrapperStyleDark = {
    marginBottom: 8,
    backgroundColor: "#364d79 ",
}

const wrapperStyleLight = {
    marginBottom: 8,
    backgroundColor: "#a3b9cc",
}

const HomeContentCarusels = () => {

    return (
        <>
            <Card
                style={wrapperStyleDark}
                className="carusel-card"
            >
                <OfferProvider>
                    <OffersCarusel />
                </OfferProvider>
            </Card>

            <Card
                style={wrapperStyleLight}
                className="carusel-card"
            >
                <RequestProvider>
                    <RequestsCarusel />
                </RequestProvider>
            </Card>

            <Card
                style={wrapperStyleDark}
                className="carusel-card"
            >
                <VolunteerProvider>
                    <VolunteersCarusel />
                </VolunteerProvider>
            </Card>

            <Card
                style={wrapperStyleLight}
                className="carusel-card"
            >
                <CommunityProvider>
                    <CommunitiesCarusel />
                </CommunityProvider>
            </Card>
        </>
    );
};

export default HomeContentCarusels;
