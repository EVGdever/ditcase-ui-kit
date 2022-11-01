import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
	title: 'Micro/Button',
	component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
	title: 'Button'
}

export const Primary = Template.bind({})
Primary.args = {
	color: 'white',
	title: 'Button',
	bgColor: 'blue'
}