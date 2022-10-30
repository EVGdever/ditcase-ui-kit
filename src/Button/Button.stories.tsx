import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
	title: 'Micro/Button',
	component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const RedButton = Template.bind({})
RedButton.args = {
	color: 'red',
	title: 'Button'
}

export const GreenButton = Template.bind({})
GreenButton.args = {
	color: 'green',
	title: 'Button'
}