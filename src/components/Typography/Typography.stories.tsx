import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from './Typography';

import '../../index.css';

const Story: ComponentMeta<typeof Typography> = {
  component: Typography,
  title: 'Typography',
};

export default Story;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const H1 = Template.bind({});

H1.args = {
  variant: 'h1',
  children: 'Lorem ipsum dolor sit amet',
};

export const H2 = Template.bind({});

H2.args = {
  variant: 'h2',
  children: 'Lorem ipsum dolor sit amet',
};

export const H3 = Template.bind({});

H3.args = {
  variant: 'h3',
  children: 'Lorem ipsum dolor sit amet',
};

export const H4 = Template.bind({});

H4.args = {
  variant: 'h4',
  children: 'Lorem ipsum dolor sit amet',
};

export const H5 = Template.bind({});

H5.args = {
  variant: 'h5',
  children: 'Lorem ipsum dolor sit amet',
};

export const H6 = Template.bind({});

H6.args = {
  variant: 'h6',
  children: 'Lorem ipsum dolor sit amet',
};

export const Subtitle1 = Template.bind({});

Subtitle1.args = {
  variant: 'subtitle-1',
  children: 'Lorem ipsum dolor sit amet',
};

export const Subtitle2 = Template.bind({});

Subtitle2.args = {
  variant: 'subtitle-2',
  children: 'Lorem ipsum dolor sit amet',
};

export const Subtitle3 = Template.bind({});

Subtitle3.args = {
  variant: 'subtitle-3',
  children: 'Lorem ipsum dolor sit amet',
};

export const Subtitle4 = Template.bind({});

Subtitle4.args = {
  variant: 'subtitle-4',
  children: 'Lorem ipsum dolor sit amet',
};

export const Body1 = Template.bind({});

Body1.args = {
  variant: 'body-1',
  children: 'Lorem ipsum dolor sit amet',
};

export const Body2 = Template.bind({});

Body2.args = {
  variant: 'body-2',
  children: 'Lorem ipsum dolor sit amet',
};

export const Body3 = Template.bind({});

Body3.args = {
  variant: 'body-3',
  children: 'Lorem ipsum dolor sit amet',
};

export const Body4 = Template.bind({});

Body4.args = {
  variant: 'body-4',
  children: 'Lorem ipsum dolor sit amet',
};

export const Label1 = Template.bind({});

Label1.args = {
  variant: 'label-1',
  children: 'Lorem ipsum dolor sit amet',
};

export const Label2 = Template.bind({});

Label2.args = {
  variant: 'label-2',
  children: 'Lorem ipsum dolor sit amet',
};

export const Label3 = Template.bind({});

Label3.args = {
  variant: 'label-3',
  children: 'Lorem ipsum dolor sit amet',
};

export const Button = Template.bind({});

Button.args = {
  variant: 'button',
  children: 'Lorem ipsum dolor sit amet',
};

export const Link = Template.bind({});

Link.args = {
  variant: 'link',
  children: 'Lorem ipsum dolor sit amet',
};
