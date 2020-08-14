import React from 'react'
import styled from 'styled-components'
import { connect, ConnectedProps } from 'react-redux'
import { showInfo } from './../../reducers/menuReducer'

const StyledButton = styled.div`
  margin: 17px 5px 0px 0px;
  pointer-events: auto;
  cursor: pointer;
  padding: 1px 11px;
  font-weight: 640;
  border-radius: 8px;
  font-size: 22px;
  border: 2px solid black;
  background-color: white;
  color: black;
  width: min-content;
  &:before {
    content: 'i';
  }
  @media (min-width: 600px) {
    &:hover {
      margin-right: 7px;
    }
  }
`

const ShowInfoButton = (props: PropsFromRedux) => {
  return (
    <div>
      {!props.menu.info ? <StyledButton onClick={props.showInfo} /> : null}
    </div>
  )
}

const mapStateToProps = (state: ReduxState) => ({
  menu: state.menu
})

const connector = connect(mapStateToProps, { showInfo })
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(ShowInfoButton)