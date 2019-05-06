import React from 'react';
import styled from 'styled-components';

import { i18n, withNamespaces } from '../../../i18n';

const Container = styled.div`
  position: relative;
`;

const Locale = styled.img`
  cursor: pointer;
  margin-top: 4px;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  padding: 10px;
  border-radius: 2px;
  background: #FFFFFF;
  box-shadow: 0px 3px 5px 0 rgba(174,174,174,0.5);
`;

interface ILocalePickerState {
  isDropDownOpen: boolean
}

class LocalePicker extends React.Component<any, ILocalePickerState> {

  public state = {
    isDropDownOpen: false
  }

  public handleLocaleClick = (lang?: string) => {

    const { i18n } = this.props;

    this.setState((prevState: ILocalePickerState) => ({
      isDropDownOpen: !prevState.isDropDownOpen
    }));

    if (i18n.language !== lang) {
      
      i18n.changeLanguage(lang);
    };
  }

  public render() {

    const { i18n } = this.props;
    const { isDropDownOpen } = this.state;

    return (
      <Container>
        <Locale
          width='30px' 
          src={`../static/icons/flags/${i18n.language}.png`}
          onClick={() => this.handleLocaleClick()}
        />
        {isDropDownOpen &&
          <Dropdown>
            {i18n.options.allLanguages.map((lang: string) =>
              <Locale
                key={lang}
                width='30px' 
                src={`../static/icons/flags/${lang}.png`}
                onClick={() => this.handleLocaleClick(lang)}
              />
            )}
          </Dropdown>
        }
      </Container>
    )
  }
}

export default withNamespaces('common')(LocalePicker)