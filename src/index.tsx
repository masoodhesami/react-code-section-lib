import * as React from 'react';
import { FC, useState } from "react"
import styled from '@emotion/styled'
import { SiJavascript } from 'react-icons/si'
import SyntaxHighLighter from 'react-syntax-highlighter';
import { FaReact, FaPython, FaVuejs, FaAngular } from 'react-icons/fa';
import { docco, darcula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export interface IProps {
  children?: JSX.Element | JSX.Element[] | string | string[],
  theme?: string | undefined
  showLineNumbers?: boolean,
  lang?: string
}

export const CodeSection: FC<IProps> = ({ children, theme = 'light', showLineNumbers = false, lang = 'javascript' }) => {
  const Divison = styled.div(
    {
      display: 'flex',
      justifyContent: 'end',
      position: 'relative',
      top: '50px',
      left: '-15px'
    },

  )
  const Button = styled.button({
    padding: '5px',
    backgroundColor: '#eee',
    fontSize: '11px',
    borderRadius: '4px',
    color: '#888',
    marginLeft: '16px',
    cursor: 'pointer',
    ' &:hover': {
      color: 'black'
    }
  })



  const codeString = `${children}`;
  const [BtnValue, setBtnValue] = useState<string>("Copy");

  const handleCopyBtnClick = () => {
    setBtnValue("Copied !");
    if (children) {
      navigator.clipboard.writeText(children.toString())
    }
  }
  return <>
    <Divison>
      {lang === 'javascript' ? <SiJavascript style={{ 'color': '#F0DB4F', 'position': 'relative', 'top': '4px', 'fontSize': '18px' }} />
        : lang === 'react' ? <FaReact style={{ 'color': '#61DBFB', 'position': 'relative', 'top': '4px', 'fontSize': '18px' }} />
          : lang === "python" ? <FaPython style={{ 'color': '#4B8BBE', 'position': 'relative', 'top': '4px', 'fontSize': '18px' }} />
            : lang === "vue" ? <FaVuejs style={{ 'color': '#42b883', 'position': 'relative', 'top': '4px', 'fontSize': '18px' }} />
              : lang === "angular" ? <FaAngular style={{ 'color': '#dd1b16', 'position': 'relative', 'top': '4px', 'fontSize': '18px' }} />
                : null
      }
      <Button onClick={handleCopyBtnClick}>{BtnValue}</Button>
    </Divison>
    <SyntaxHighLighter language="javascript" style={theme === 'light' ? docco : theme === 'dark' ? darcula : docco} showLineNumbers={showLineNumbers}>
      {codeString}
    </SyntaxHighLighter>
  </>
}
