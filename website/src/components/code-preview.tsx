import { type PropsWithChildren } from 'react'
import { Box, type BoxProps } from 'styled-system/jsx'
import { CopyToClipboardButton } from './copy-to-clipboard-button'

interface Props extends BoxProps {
  code: string
  standalone?: boolean
}

export const CodePreview = (props: PropsWithChildren<Props>) => {
  const { children, standalone, code, ...rest } = props
  return (
    <Box bg="gray.dark.2" position="relative" {...rest}>
      <Box
        position="absolute"
        top="1"
        right="1"
        className="dark"
        display={props.standalone ? 'block' : 'none'}
      >
        <CopyToClipboardButton content={code} dark />
      </Box>
      <Box maxH="xl" overflow="auto" p="4">
        {children}
      </Box>
    </Box>
  )
}
