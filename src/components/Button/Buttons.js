import {Component} from 'react'
import Button from './Button'

class Buttons extends Component {
    render () {
        return (
            <div className="panel">
                <h2>Button List</h2>
                <hr />
                <h3>Primary Buttons</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <Button text="Large & Neutral" size="large" type="button" variant="primary" status="neutral" />
                    <Button text="Large & Pressed" size="large" type="button" variant="primary" status="pressed" />
                    <Button text="Large & Inactive" size="large" type="button" variant="primary" status="inactive" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <Button text="Medium & Neutral" size="medium" type="button" variant="primary" status="neutral" />
                    <Button text="Medium & Pressed" size="medium" type="button" variant="primary" status="pressed" />
                    <Button text="Medium & Inactive" size="medium" type="button" variant="primary" status="inactive" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <Button text="Small & Neutral" size="small" type="button" variant="primary" status="neutral" />
                    <Button text="Small & Pressed" size="small" type="button" variant="primary" status="pressed" />
                    <Button text="Small & Inactive" size="small" type="button" variant="primary" status="inactive" />
                </div>

                <h3>Info Buttons</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <Button text="Large & Neutral" size="large" type="button" variant="info" status="neutral" />
                    <Button text="Large & Pressed" size="large" type="button" variant="info" status="pressed" />
                    <Button text="Large & Inactive" size="large" type="button" variant="info" status="inactive" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <Button text="Medium & Neutral" size="medium" type="button" variant="info" status="neutral" />
                    <Button text="Medium & Pressed" size="medium" type="button" variant="info" status="pressed" />
                    <Button text="Medium & Inactive" size="medium" type="button" variant="info" status="inactive" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <Button text="Small & Neutral" size="small" type="button" variant="info" status="neutral" />
                    <Button text="Small & Pressed" size="small" type="button" variant="info" status="pressed" />
                    <Button text="Small & Inactive" size="small" type="button" variant="info" status="inactive" />
                </div>

                <h3>Success Buttons</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <Button text="Large & Neutral" size="large" type="button" variant="success" status="neutral" />
                    <Button text="Large & Pressed" size="large" type="button" variant="success" status="pressed" />
                    <Button text="Large & Inactive" size="large" type="button" variant="success" status="inactive" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <Button text="Medium & Neutral" size="medium" type="button" variant="success" status="neutral" />
                    <Button text="Medium & Pressed" size="medium" type="button" variant="success" status="pressed" />
                    <Button text="Medium & Inactive" size="medium" type="button" variant="success" status="inactive" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <Button text="Small & Neutral" size="small" type="button" variant="success" status="neutral" />
                    <Button text="Small & Pressed" size="small" type="button" variant="success" status="pressed" />
                    <Button text="Small & Inactive" size="small" type="button" variant="success" status="inactive" />
                </div>

                <h3>Warning Buttons</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <Button text="Large & Neutral" size="large" type="button" variant="warning" status="neutral" />
                    <Button text="Large & Pressed" size="large" type="button" variant="warning" status="pressed" />
                    <Button text="Large & Inactive" size="large" type="button" variant="warning" status="inactive" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <Button text="Medium & Neutral" size="medium" type="button" variant="warning" status="neutral" />
                    <Button text="Medium & Pressed" size="medium" type="button" variant="warning" status="pressed" />
                    <Button text="Medium & Inactive" size="medium" type="button" variant="warning" status="inactive" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <Button text="Small & Neutral" size="small" type="button" variant="warning" status="neutral" />
                    <Button text="Small & Pressed" size="small" type="button" variant="warning" status="pressed" />
                    <Button text="Small & Inactive" size="small" type="button" variant="warning" status="inactive" />
                </div>

                <h3>Danger Buttons</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <Button text="Large & Neutral" size="large" type="button" variant="danger" status="neutral" />
                    <Button text="Large & Pressed" size="large" type="button" variant="danger" status="pressed" />
                    <Button text="Large & Inactive" size="large" type="button" variant="danger" status="inactive" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <Button text="Medium & Neutral" size="medium" type="button" variant="danger" status="neutral" />
                    <Button text="Medium & Pressed" size="medium" type="button" variant="danger" status="pressed" />
                    <Button text="Medium & Inactive" size="medium" type="button" variant="danger" status="inactive" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <Button text="Small & Neutral" size="small" type="button" variant="danger" status="neutral" />
                    <Button text="Small & Pressed" size="small" type="button" variant="danger" status="pressed" />
                    <Button text="Small & Inactive" size="small" type="button" variant="danger" status="inactive" />
                </div>

                <h3>Default Buttons</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <Button text="Large & Neutral" size="large" type="button" variant="default" status="neutral" />
                    <Button text="Large & Pressed" size="large" type="button" variant="default" status="pressed" />
                    <Button text="Large & Inactive" size="large" type="button" variant="default" status="inactive" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <Button text="Medium & Neutral" size="medium" type="button" variant="default" status="neutral" />
                    <Button text="Medium & Pressed" size="medium" type="button" variant="default" status="pressed" />
                    <Button text="Medium & Inactive" size="medium" type="button" variant="default" status="inactive" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <Button text="Small & Neutral" size="small" type="button" variant="default" status="neutral" />
                    <Button text="Small & Pressed" size="small" type="button" variant="default" status="pressed" />
                    <Button text="Small & Inactive" size="small" type="button" variant="default" status="inactive" />
                </div>
            </div>
        )
    }
}

export default Buttons;