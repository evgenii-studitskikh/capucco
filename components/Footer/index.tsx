import React from 'react';
import { withNamespaces } from '../../i18n';

import {
  Container,
  Wrapper,
} from './styled'

class Footer extends React.Component {
  
  render() {

    const { t }: any = this.props;

    return (
      <Container>
        <Wrapper>
          {t('copyright')}
        </Wrapper>
      </Container>
    )
  }
}

export default withNamespaces('footer')(Footer)
