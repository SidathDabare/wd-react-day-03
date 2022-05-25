import React from 'react'
import { Alert } from 'react-bootstrap'

const WarningSign = ({ alert }) => {
    return (
        <Alert variant="danger">
            <Alert.Heading>{alert}</Alert.Heading>
        </Alert>
    )
}

export default WarningSign