import React from 'react'

class Steps extends React.Component {
  render() {
    return (
      <div id="steps">
        <div className="ui mini steps" wfd-id="260">
          <div className="active step" wfd-id="268">
            <i className="expand icon" />
            <div className="content" wfd-id="269">
              <div className="title" wfd-id="271">
                Step 1
              </div>
              <div className="description" wfd-id="270">
                Choose grid dimension
              </div>
            </div>
          </div>
          <div className="disabled step" wfd-id="264">
            <i className="flag outline arrow icon" />
            <div className="content" wfd-id="265">
              <div className="title" wfd-id="267">
                Step 2
              </div>
              <div className="description" wfd-id="266">
                Choose starting point
              </div>
            </div>
          </div>
          <div className="disabled step" wfd-id="261">
            <i className="flag checkered icon" />
            <div className="content" wfd-id="262">
              <div className="title" wfd-id="263">
                Step 3
              </div>
              <div className="description" wfd-id="263">
                Choose goal point by clicking on a point
              </div>
            </div>
          </div>
          <div className="disabled step" wfd-id="261">
            <i className="map signs icon" />
            <div className="content" wfd-id="262">
              <div className="title" wfd-id="270">
                Step 4
              </div>
              <div className="description" wfd-id="263">
                Draw obstacles by clicking on points
              </div>
            </div>
          </div>
          <div className="disabled step" wfd-id="261">
            <i className="search icon" />
            <div className="content" wfd-id="262">
              <div className="title" wfd-id="263">
                Step 5
              </div>
              <div className="description" wfd-id="263">
                Searching for goal
              </div>
            </div>
          </div>
          <div className="disabled step" wfd-id="261">
            <i className="info icon" />
            <div className="content" wfd-id="262">
              <div className="title" wfd-id="263">
                Finish
              </div>
              <div className="description" wfd-id="263">
                Result of the searching
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Steps
