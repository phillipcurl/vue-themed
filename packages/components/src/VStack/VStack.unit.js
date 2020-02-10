import { shallowMount } from '@vue/test-utils';

import VStack from './VStack';

test('exports a valid component', () => {
	expect(VStack).toBeAComponent();
});

// test('renders the text "HelloA"', () => {
//   const { element } = shallowMount(VStack)
//   expect(element.textContent.trim()).toBe('HelloA')
// })

test('adds a "v-stack" class on the root element', () => {
	const { element } = shallowMount(VStack);
	expect(element.classList.contains('v-stack')).toBe(true);
});
