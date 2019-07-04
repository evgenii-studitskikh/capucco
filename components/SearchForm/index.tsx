import React from 'react';
import Link from 'next/link'

import { withNamespaces } from '../../i18n';
import {
  Container,
  Header,
  Form,
  ApplyButton,
} from './styled'
import Location from './Location';
import Subject from './Subject';
import {
  ILocation,
  ISubject,
} from './types';

interface ISearchFormState {
  location: ILocation,
  subject: ISubject
}

class SearchForm extends React.Component<any, ISearchFormState> {

  public state = {
    location: {
      id: 0,
      name: ''
    },
    subject: {
      id: 0,
      name: ''
    }
  }

  public handleLocationChange = (location: ILocation) => {

    this.setState({ location })
  }

  render() {

    const { t }: any = this.props;

    const {
      location,
      subject,
    } = this.state;
    
    return (
      <Container>
        <Header>{t('header')}</Header>
        <Form>
          <Location
            locationValue={location}
            onLocationChange={this.handleLocationChange}
            placeholder={t('location_placeholder')}
          />
          <Subject
            subjectValue={subject}
            placeholder={t('subject_placeholder')}
          />
          <Link href={`/searchresults?location=${location.id}`}>
            <ApplyButton>
              {t('button')}
            </ApplyButton>
          </Link>
        </Form>
      </Container>
    )
  }
}

export default withNamespaces('search-form')(SearchForm)
