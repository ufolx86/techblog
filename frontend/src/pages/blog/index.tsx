import React from 'react'
import { Card } from '../../components/card'
import { TextInput } from '../../components/text-input'
import { ErrorIcon } from '../../components/text-input/assets/icons/error-icon'

const Blog = () => {
  const [inputField, setInputField] = React.useState('')
  return (
    <>
      <TextInput
        name="inputField"
        type="email"
        value={inputField}
        onChange={(e) => setInputField(e.target.value)}
        label="Email Address"
        required
        placeholder="email@email.com"
        errorText="This is a required field"
        leftIcon={<ErrorIcon />}
        rightIcon={<ErrorIcon />}
      />

      {/*Card with header and footer*/}

      <Card>
        <Card.Header title="This is a Demo Title" />
        <Card.Content>
            Hello World Dude
        </Card.Content>
        <Card.Footer><p>This is a Demo Footer</p></Card.Footer>
      </Card>

      {/*Card with media and footer*/}
      
      <Card>
        <Card.Media
          source="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.motortrend.com%2Fnews%2F2020-audi-e-tron-sportback-first-look-review%2F&psig=AOvVaw1H9wVJxw7F5aD_sD6u_Czw&ust=1639599063152000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCS19GM5PQCFQAAAAAdAAAAABAD"
          alt="Car"
        />
        <Card.Header title="This is a Demo Title" />
        <Card.Content>
            Hello World Dude
        </Card.Content>
        <Card.Footer><p>This is a Demo Footer</p></Card.Footer>
      </Card>

    </>
  )
}

export default Blog
