import React from 'react';
import styled from 'styled-components';

import { i18n, withNamespaces } from '../../../i18n';

const Container = styled.div`
  position: relative;
  margin-top: 5px;
`;

const Locale = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin-top: 20px;
  cursor: pointer;
`;

const LocaleImage = styled.img`
  width: 30px;
  height: 15px;
  cursor: pointer;
`;


const LocaleName = styled.div`
  margin-right: 10px;
  color: #000000;
`;

const Dropdown = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 30px;
  right: 0;
  width: 220px;
  padding: 0 20px 20px;
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

  private getLanguageName = (lang: string) => {
    switch (lang) {
      case 'en':
        return 'English'
      case 'de':
        return 'Deutsch'
      case 'ru':
        return 'Русский'
    }
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
        <LocaleImage
          src={`../static/icons/flags/${i18n.language}.png`}
          onClick={() => this.handleLocaleClick()}
        />
        {isDropDownOpen &&
          <Dropdown>
            {i18n.options.allLanguages.map((lang: string) =>
              <Locale
                key={lang}
                onClick={() => this.handleLocaleClick(lang)}
              >
                <LocaleName>{this.getLanguageName(lang)}</LocaleName>
                <LocaleImage
                  src={`../static/icons/flags/${lang}.png`}
                />
              </Locale>
            )}
          </Dropdown>
        }
      </Container>
    )
  }
}

export default withNamespaces('common')(LocalePicker)